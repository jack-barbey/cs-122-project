# This file will be used to produce DW-NOMINATE or equivalent ratings 
# for presidents, senators, representatives, and governors

import urllib.parse
import requests
import bs4
import re




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






def get_oti_score(name):
    """
    Inputs name of legislator.
    Returns tuple with their On The Issues scores on 
        economic and social issues.
    """
    if name in SENATORS:
        name.replace("-", "_")
        name.replace(" ", "_")
        url = "http://senate.ontheissues.org/Senate/" + name + ".htm"
    # url = name
    # CONVERT NAMES INTO URLS
    soup = get_soup(url)
    text = soup.text
    econ_scores = re.findall("-?[0-9](?= points on Economic scale)", text)
    econ_total = sum([int(x) for x in econ_scores])
    social_scores = re.findall("-?[0-9](?= points on Social scale)", text)
    social_total = sum([int(x) for x in social_scores])
    return (econ_total, social_total)

