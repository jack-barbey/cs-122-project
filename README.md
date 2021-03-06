# What's My Bias? #
A CS122 project by Team Error 418:
Jack Barbey, Andrew Mao, Edward Park, and Peter Wiggin

'What's My Bias' is a google chrome extension that analyzes the text of a given webpage and attempts to quantify the political bias of that page. It uses regular expression to find names of politicians and performs sentiment analysis on the sentence including that name, then compares the sentiment to a score generated by DWNominate that places each politician on a continuum from liberal to conservative. Using a Bayesian approach, it summarizes all of these sentiments to report a single score, which can be viewed in the plugin's drop down box.

## Instructions for Installation ##

1) If not already installed, install Google Chrome to your computer.

2) Navigate to chrome://extensions

3) Drop the file Whats_My_Bias.crx from our project files into this window.

4) The window will ask you if you would like to add the extension, reply affirmatively.

5) The extension should be ready for use.

Caveat: Occasionally, Chrome force disables our extension because it does not come from the App Store. If this occurs, turn on Developer Mode and load it as an unpacked extension. That will allow you to run the extension.

## Notes on files contained in our project: ##

1) The .crx file is the fully operational extension bundled together. It is bundled from the files located in the "Extension Files" folder.  As an alternative to loading the .crx file, you can enable Developer Mode on the chrome://extensions page and load this folder as an unpacked extension. Use will be the exact same.

2) Some miscellaneous files that we created or used in the production of the extension are included in the "Other Items" folder, including the Python code used to get SCORES, our array of politicians and their DW-NOMINATE scores (see "rate-politicians").
