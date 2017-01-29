# This file will be used to produce DW-NOMINATE or equivalent ratings 
# for presidents, senators, representatives, and governors

import urllib.parse
import requests
import bs4
import re
import csv



def get_soup(url):
    """
    Inputs an absolute url and makes a request.
    Returns soup object.
    """
    try:
        r = requests.get(url)
        if r.status_code == 404 or r.status_code == 403:
            print("404 error")
            r = None
    except:
        print("except")
        r = None
    if r == None:
        print("No request")
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
    senators = read_csv("current_senators.csv")
    match = False
    for senator in senators:
        first, last, state, alt_first, alt_last = senator
        if last_name in [last, alt_last]:
            if first_name in [first, alt_first]:
                match = True
                full_name = first + " " + last
    if match == False:
        print("No match found")
        return (None, None)

    url_name = re.sub("[ \.]", "_", full_name)
    url_name = re.sub("'", "%60", url_name)
    url = "http://senate.ontheissues.org/Senate/" + url_name + ".htm"

    soup = get_soup(url)
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
        if econ_oti and social_oti:
            fused.append([role, state, party, first, last, dw_score, econ_oti, 
                social_oti, alt_first, alt_last])
    write_csv(fused, "fused_scores.csv")
    return None


# def predict_





