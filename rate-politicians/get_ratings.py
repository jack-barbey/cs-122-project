# This file will be used to produce DW-NOMINATE or equivalent ratings 
# for presidents, senators, representatives, and governors

import urllib.parse
import requests
import bs4
import re
import csv
import numpy as np


def get_soup(url):
    """
    Inputs an absolute url and makes a request.
    Returns soup object.
    """
    try:
        r = requests.get(url)
        if r.status_code == 404 or r.status_code == 403:
            # print("404 error caused by", url)
            r = None
    except:
        # print("could not get request from", url)
        r = None
    if r == None:
        # print("No request")
        return None

    try:
        html = r.text.encode('iso-8859-1')
    except:
        print("read failed: " + r.url)
        return None

    soup = bs4.BeautifulSoup(html, "lxml")
    return soup


def read_csv(csvfile):
    """
    Input the name of a csv file with a politician's info in each row.

    Returns a list of lists with politician info.
    """
    rv = []
    with open(csvfile, "r") as f:
        reader = csv.reader(f)
        for politician in reader:
            rv.append(politician)
    return rv


def write_csv(list_of_lists, new_csv_filename):
    """
    Input a list of lists with politicians' info in each list.

    Creates a csv file to store the input.
    """
    with open(new_csv_filename, "w") as f:
        wr = csv.writer(f)
        for row in list_of_lists:
            wr.writerow(row)
    return None


def get_oti_score(first_name, last_name):
    """
    Inputs name of legislator.
    Returns tuple with their On The Issues scores on 
        (economic issues, social issues).
    """
    # Eventually move this line to somewhere more efficient
    currently_in_office = read_csv("currently_in_office.csv")
    have_dw_nominate_score = read_csv("dw-nominate.csv")
    known_politicians = currently_in_office + have_dw_nominate_score
    match = False
    for politician in known_politicians:
        role, state, party, first, last, dw, alt_first, alt_last = politician
        # first, last, state, alt_first, alt_last = senator
        if last_name in [last, alt_last]:
            if first_name in [first, alt_first]:
                match = True
                full_name = first + " " + last
                their_role = role
                their_state = state
    if match == False:
        print("No On The Issues page for", first_name, last_name, "found.")
        return (None, None)

    url_name = re.sub("[ \.]", "_", full_name)
    url_name = re.sub("'", "%60", url_name)
    if url_name == "Mike_Rogers":
        # There were two Mike Rogers in Congress, 
        # so the second one has a custom url
        url = "http://www.ontheissues.org/MI/Mike_Rogers.htm"

    elif their_role == "House":
        url = "http://www.ontheissues.org/" + their_state + "/" + url_name + ".htm"
    elif their_role == "Senate":
        url = "http://www.ontheissues.org/Senate/" + url_name + ".htm"
    elif their_role == "Governor" or "President":
        url = "http://www.ontheissues.org/" + url_name + ".htm"
    else:
        print(first, last, "has not been a governor or held federal office.")
        return (None, None)

    soup = get_soup(url)
    if not soup:
        # Members of the House of Reps have two different url formats
        url = "http://www.ontheissues.org/House/" + url_name + ".htm"
        soup = get_soup(url)
        if not soup:
            print(url_name)
            return (None, None)
    text = soup.text
    econ_scores = re.findall("-?[0-9](?= points on Economic scale)", text)
    econ_total = sum([int(x) for x in econ_scores])
    social_scores = re.findall("-?[0-9](?= points on Social scale)", text)
    social_total = sum([int(x) for x in social_scores])
    return (econ_total, social_total)


# def get_all_senator_ideologies():
#     senators = read_csv("current_senators.csv")
#     rv = []
#     for first, last, state, alt_first, alt_last in senators:
#         print("Checking", first, last)
#         econ, social = get_oti_score(first, last)
#         overall = econ - social
#         if overall < -20:
#             ideology = "Democrat"
#         elif overall > 20:
#             ideology = "Republican"
#         else:
#             ideology = "Moderate"
#         rv.append([first, last, ideology])
#     return rv

def fuse_dw_nominate_and_oti_scores(dw_nominate_filename):
    """
    Creates a .csv file with politicians' names, DW-NOMINATE scores, and
        economic and social scores from On The Issues.
        File will be used in a regression to impute unknown DW-NOMINATE scores
        from known OTI scores.
    
    Input: .csv file with DW-NOMINATE scores

    Creates .csv file with DW-NOMINATE and OTI scores
    """
    fused = []
    dw_table = read_csv(dw_nominate_filename)
    for role, state, party, first, last, dw_score, alt_first, alt_last in dw_table:
        econ_oti, social_oti = get_oti_score(first, last)
        if econ_oti != None:
            fused.append([role, state, party, first, last, dw_score, econ_oti, 
                social_oti, alt_first, alt_last])
        else:
            print("No scores for", first, last)
    write_csv(fused, "fused_scores.csv")
    return None


def predict_dw_nominate_from_oti(fused_filename):
    """
    Use the DW-NOMINATE and On The Issues scores from the 113th Congress
        to produce a formula for inferring DW-NOMINATE (the preferred measure
        of partisanship) from always-available OTI scores.

    Input: a csv file with both DW-NOMINATE and OTI scores for each politician

    Returns: beta, an array holding the coefficients of a linear regression
        of DW-NOMINATE on OTI.

    Result should be: 
        beta = array([0.08356, 0.01157, -0.00101])

    Corresponding equation:
        DW-NOMINATE = 0.08356 + 0.01157(OTI econ score) - 0.00101(OTI social score)
    """
    fused = read_csv(fused_filename)
    num_politicians = len(fused)

    X_as_list = []
    y_as_list = []
    for role, state, party, first, last, dw, econ, social, alt_first, alt_last in fused:
        X_as_list.append([1, econ, social]) # 1 creates the constant term in the regression
        y_as_list.append(dw)
    X = np.array(X_as_list)
    y = np.array(y_as_list)
    beta = np.linalg.lstsq(X, y)[0]
    return beta


# Coefficients of the regression above
CONSTANT = 0.08356
ECON_COEF = 0.01157
SOCIAL_COEF = -0.0101


def create_final_scores_file(dw_nominate_filename, currently_in_office_filename):
    """
    Creates the final csv file holding politician info and DW-NOMINATE scores,
        either official or imputed from On The Issues scores.

    Input: 
        dw_nominate_filename: csv file with info on the 113th Congress
            Everyone has DW-NOMINATE score
        currently_in_office_filename: csv file with info on the 115th Congress
            Some have DW-NOMINATE scores, but others don't
    """
    congress_113 = read_csv(dw_nominate_filename)
    to_be_written = []
    already_added = []
    for role, state, party, first, last, dw, alt_first, alt_last in congress_113:
        to_be_written.append([role, state, party, first, last, dw, alt_first, alt_last])
        already_added.append(first + " " + last)

    congress_115 = read_csv(currently_in_office_filename)
    for role, state, party, first, last, dw, alt_first, alt_last in congress_115:
        full_name = first + " " + last
        if full_name not in already_added:
            if dw:
                imputed_dw = dw
            else:
                econ_oti, social_oti = get_oti_score(first, last)
                if econ_oti == None or social_oti == None:
                    print(first, last, "doesn't have an OTI score")
                else:
                    imputed_dw = CONSTANT + ECON_COEF * econ_oti + SOCIAL_COEF * social_oti
                    imputed_dw = round(imputed_dw, 3)
            to_be_written.append([role, state, party, first, last, imputed_dw, alt_first, alt_last])
            already_added.append(first + " " + last)

    write_csv(to_be_written, "final_scores_file.csv")
    return None


def convert_to_js(csvfile):
    """
    As it turns out, reading a csv file in Javascript is difficult! So,
    this function converts the csv file made above into a JS array of arrays.

    Input: final_scores_file.csv
    
    Returns: same information in a JS file, scores_array.js
    """
    politicians = read_csv(csvfile)
    # Add quotes to force interpretation as string
    for politician in politicians:
        for field in politician:
            field = '"' + field + '"'

    with open("scores_array.js", "w") as f:
        wr = csv.writer(f, delimiter=";")
        wr.writerow(["var scores = ["])
        for row in politicians:
            wr.writerow([str(row) + ","])
        wr.writerow("]")

    return None






