var example_text = "\nElection ResultsNationWorldOur Team\nTrump's Sweden comment raises questions\n\nBy Eric Bradner, CNN\nUpdated 2:24 PM ET, Sun February 19, 2017\n\n\nFlynn: One of the greatest presidencies\n\nJudge rejects request to delay travel ban case\n\nTrump defends ban, Trudeau has opposing view\n\nTrump shakes Japanese PM's hand for 19 seconds\n\nTapper: Trump's tweets a window into his soul\n\nTrump slams 'so-called' judge who halted ban\n\nCNN/ORC poll: Trump approval rating at 44%\n\nTrump's foreign policy sparks confusion\nNow Playing\nTrump's Sweden remark raises questions\n\nPresident Trump starts rally attacking media\n\nCNN anchor to Trump: Jefferson favored media\n\nTrump brings supporter on stage during rally\n\nCongress could force release of Trump's taxes\n\nTrump: I can live with 2 or 1-state solution\n\nTrump White House seeing chaotic first month\n\nWatch Trump ignore several questions on Russia\n\nFlynn: One of the greatest presidencies\n\nJudge rejects request to delay travel ban case\n\nTrump defends ban, Trudeau has opposing view\n\nTrump shakes Japanese PM's hand for 19 seconds\n\nTapper: Trump's tweets a window into his soul\n\nTrump slams 'so-called' judge who halted ban\n\nCNN/ORC poll: Trump approval rating at 44%\n\nTrump's foreign policy sparks confusion\n\nTrump's Sweden remark raises questions\n\nPresident Trump starts rally attacking media\n\nCNN anchor to Trump: Jefferson favored media\n\nTrump brings supporter on stage during rally\n\nCongress could force release of Trump's taxes\n\nTrump: I can live with 2 or 1-state solution\n\nTrump White House seeing chaotic first month\n\nWatch Trump ignore several questions on Russia\nStory highlights\n'We've got to keep our country safe,' he said\nThe White House did not immediately respond to a request for comment Sunday\nWashington (CNN)President Donald Trump's reference to 'what's happening last night in Sweden' during a Saturday rally in Florida raised questions in Sweden and around the internet about what he really meant.\n\nTrump referenced the Scandinavian nation, known for liberally accepting Syrian refugees, during a section of his speech decrying the dangers of open borders.\n'We've got to keep our country safe,' he said. 'You look at what's happening in Germany. You look at what's happening last night in Sweden. Sweden, who would believe this? Sweden. They took in large numbers. They're having problems like they never thought possible. You look at what's happening in Brussels. You look at what's happening all over the world. Take a look at Nice. Take a look at Paris.'\n\nKasich: World leaders 'just not sure' where Trump stands\nTrump appeared to be referring to recent terror attacks in Germany and elsewhere, but no such attack has occurred in Sweden. The White House did not immediately respond Sunday morning to questions about what Trump meant.\nThe official Twitter of the Embassy of Sweden in the US has responded to those asking about what happened Friday night by saying: 'Unclear to us what President Trump was referring to. Have asked US officials for explanation.'\nOthers on Twitter have speculated that Trump, who is a well-chronicled consumer of television news, might have been watching a segment on Fox News host Tucker Carlson's show Friday night.\nCarlson interviewed Ami Horowitz, a filmmaker who has tried to tie Sweden's taking in of asylum seekers to increased violent crimes in the country.\nCarl Bildt, the former Swedish prime minister, questioned the President's statement on Twitter.\n'Sweden? Terror attack? What has he been smoking?' Bildt tweeted. 'Questions abound.'\nTrump's remark is the latest misplaced reference to a terrorist attack or incident by those in his White House. Trump counselor Kellyanne Conway inaccurately referred to a 'Bowling Green massacre' that never took place, and White House press secretary Sean Spicer referred to an attack in Atlanta, later clarifying that he meant to refer to Orlando.\nSections\nElection ResultsNationWorldOur Team\nFollow us\nCNN.com\n© 2017 Cable News Network. Turner Broadcasting System, Inc. All Rights Reserved.\nCNN Sans ™ & © 2016 Cable News Network. Terms of service | Privacy guidelines\n\nOpinion: We need to reality-check ourselves on ICE raids\n\nSupporter: I salute cardboard Trump every day\n"

var sentiment = require("sentiment")

/*
SCORES holds the information about all politicians in our dataset.
Unfortunately, it must be defined above the functions in which it is used.
Keep scrolling!
*/

var SCORES = [
['House', 'AK', 'R', 'Don', 'Young', '0.28', '', ''],
['House', 'AL', 'R', 'Jo', 'Bonner', '0.395', '', ''],
['House', 'AL', 'R', 'Bradley', 'Byrne', '0.581', '', ''],
['House', 'AL', 'R', 'Martha', 'Roby', '0.359', '', ''],
['House', 'AL', 'R', 'Michael', 'Rogers', '0.346', '', ''],
['House', 'AL', 'R', 'Robert', 'Aderholt', '0.376', '', ''],
['House', 'AL', 'R', 'Mo', 'Brooks', '0.61', '', ''],
['House', 'AL', 'R', 'Spencer', 'Bachus', '0.411', '', ''],
['House', 'AL', 'D', 'Terri', 'Sewell', '-0.353', '', ''],
['House', 'AR', 'R', 'Rick', 'Crawford', '0.341', '', ''],
['House', 'AR', 'R', 'Tim', 'Griffin', '0.448', '', ''],
['House', 'AR', 'R', 'Steve', 'Womack', '0.34', '', ''],
['House', 'AR', 'R', 'Tom', 'Cotton', '0.689', '', ''],
['House', 'AZ', 'D', 'Ann', 'Kirkpatrick', '-0.123', '', ''],
['House', 'AZ', 'D', 'Ron', 'Barber', '-0.104', '', ''],
['House', 'AZ', 'D', 'Raul', 'Grijalva', '-0.605', '', ''],
['House', 'AZ', 'R', 'Paul', 'Gosar', '0.588', '', ''],
['House', 'AZ', 'R', 'Matt', 'Salmon', '0.72', '', ''],
['House', 'AZ', 'R', 'David', 'Schweikert', '0.715', '', ''],
['House', 'AZ', 'D', 'Ed', 'Pastor', '-0.423', '', ''],
['House', 'AZ', 'R', 'Trent', 'Franks', '0.787', '', ''],
['House', 'AZ', 'D', 'Kyrsten', 'Sinema', '-0.116', '', ''],
['House', 'CA', 'R', 'Doug', 'LaMalfa', '0.6', '', ''],
['House', 'CA', 'D', 'Jared', 'Huffman', '-0.476', '', ''],
['House', 'CA', 'D', 'John', 'Garamendi', '-0.332', '', ''],
['House', 'CA', 'R', 'Tom', 'McClintock', '0.807', '', ''],
['House', 'CA', 'D', 'Mike', 'Thompson', '-0.41', '', ''],
['House', 'CA', 'D', 'Doris', 'Matsui', '-0.45', '', ''],
['House', 'CA', 'D', 'Ami', 'Bera', '-0.203', '', ''],
['House', 'CA', 'R', 'Paul', 'Cook', '0.444', '', ''],
['House', 'CA', 'D', 'Jerry', 'McNerney', '-0.247', '', ''],
['House', 'CA', 'R', 'Jeff', 'Denham', '0.413', '', ''],
['House', 'CA', 'D', 'George', 'Miller', '-0.574', '', ''],
['House', 'CA', 'D', 'Nancy', 'Pelosi', '-0.505', '', ''],
['House', 'CA', 'D', 'Barbara', 'Lee', '-0.71', '', ''],
['House', 'CA', 'D', 'Jackie', 'Speier', '-0.426', '', ''],
['House', 'CA', 'D', 'Eric', 'Swalwell', '-0.37', '', ''],
['House', 'CA', 'D', 'Jim', 'Costa', '-0.18', '', ''],
['House', 'CA', 'D', 'Mike', 'Honda', '-0.554', '', ''],
['House', 'CA', 'D', 'Anna', 'Eshoo', '-0.404', '', ''],
['House', 'CA', 'D', 'Zoe', 'Lofgren', '-0.421', '', ''],
['House', 'CA', 'D', 'Sam', 'Farr', '-0.469', '', ''],
['House', 'CA', 'R', 'David', 'Valadao', '0.334', '', ''],
['House', 'CA', 'R', 'Devin', 'Nunes', '0.502', '', ''],
['House', 'CA', 'R', 'Kevin', 'McCarthy', '0.485', '', ''],
['House', 'CA', 'D', 'Lois', 'Capps', '-0.394', '', ''],
['House', 'CA', 'R', 'Buck', 'McKeon', '0.419', 'Howard', ''],
['House', 'CA', 'D', 'Julia', 'Brownley', '-0.284', '', ''],
['House', 'CA', 'D', 'Judy', 'Chu', '-0.525', '', ''],
['House', 'CA', 'D', 'Adam', 'Schiff', '-0.339', '', ''],
['House', 'CA', 'D', 'Tony', 'Cardenas', '-0.374', '', ''],
['House', 'CA', 'D', 'Brad', 'Sherman', '-0.356', '', ''],
['House', 'CA', 'R', 'Gary', 'Miller', '0.5', '', ''],
['House', 'CA', 'D', 'Grace', 'Napolitano', '-0.457', '', ''],
['House', 'CA', 'D', 'Henry', 'Waxman', '-0.485', '', ''],
['House', 'CA', 'D', 'Xavier', 'Becerra', '-0.529', '', ''],
['House', 'CA', 'D', 'Gloria', 'Negrete McLeod', '-0.437', '', ''],
['House', 'CA', 'D', 'Raul', 'Ruiz', '-0.197', '', ''],
['House', 'CA', 'D', 'Karen', 'Bass', '-0.546', '', ''],
['House', 'CA', 'D', 'Linda', 'Sanchez', '-0.511', '', ''],
['House', 'CA', 'R', 'Ed', 'Royce', '0.715', '', ''],
['House', 'CA', 'D', 'Lucille', 'Roybal-Allard', '-0.476', '', ''],
['House', 'CA', 'D', 'Mark', 'Takano', '-0.515', '', ''],
['House', 'CA', 'R', 'Ken', 'Calvert', '0.371', '', ''],
['House', 'CA', 'D', 'Maxine', 'Waters', '-0.669', '', ''],
['House', 'CA', 'D', 'Janice', 'Hahn', '-0.463', '', ''],
['House', 'CA', 'R', 'John', 'Campbell', '0.784', '', ''],
['House', 'CA', 'D', 'Loretta', 'Sanchez', '-0.369', '', ''],
['House', 'CA', 'D', 'Alan', 'Lowenthal', '-0.531', '', ''],
['House', 'CA', 'R', 'Dana', 'Rohrabacher', '0.66', '', ''],
['House', 'CA', 'R', 'Darrell', 'Issa', '0.541', '', ''],
['House', 'CA', 'R', 'Duncan', 'Hunter', '0.543', '', ''],
['House', 'CA', 'D', 'Juan', 'Vargas', '-0.404', '', ''],
['House', 'CA', 'D', 'Scott', 'Peters', '-0.155', '', ''],
['House', 'CA', 'D', 'Susan', 'Davis', '-0.343', '', ''],
['House', 'CN', 'D', 'John', 'Larson', '-0.412', 'John B.', ''],
['House', 'CN', 'D', 'Joe', 'Courtney', '-0.355', '', ''],
['House', 'CN', 'D', 'Rosa', 'DeLauro', '-0.424', '', ''],
['House', 'CN', 'D', 'Jim', 'Himes', '-0.246', '', ''],
['House', 'CN', 'D', 'Elizabeth', 'Esty', '-0.317', '', ''],
['House', 'CO', 'D', 'Diana', 'DeGette', '-0.451', '', ''],
['House', 'CO', 'D', 'Jared', 'Polis', '-0.317', '', ''],
['House', 'CO', 'R', 'Scott', 'Tipton', '0.478', '', ''],
['House', 'CO', 'R', 'Cory', 'Gardner', '0.527', '', ''],
['House', 'CO', 'R', 'Doug', 'Lamborn', '0.729', '', ''],
['House', 'CO', 'R', 'Mike', 'Coffman', '0.563', '', ''],
['House', 'CO', 'D', 'Ed', 'Perlmutter', '-0.286', '', ''],
['House', 'DE', 'D', 'John', 'Carney', '-0.249', '', ''],
['House', 'FL', 'R', 'Jeff', 'Miller', '0.665', '', ''],
['House', 'FL', 'R', 'Steve', 'Southerland', '0.598', '', ''],
['House', 'FL', 'R', 'Ted', 'Yoho', '0.85', '', ''],
['House', 'FL', 'R', 'Ander', 'Crenshaw', '0.358', '', ''],
['House', 'FL', 'D', 'Corrine', 'Brown', '-0.422', '', ''],
['House', 'FL', 'R', 'Ron', 'DeSantis', '0.739', '', ''],
['House', 'FL', 'R', 'John', 'Mica', '0.476', '', ''],
['House', 'FL', 'R', 'Bill', 'Posey', '0.501', '', ''],
['House', 'FL', 'D', 'Alan', 'Grayson', '-0.409', '', ''],
['House', 'FL', 'R', 'Dan', 'Webster', '0.481', 'Daniel', ''],
['House', 'FL', 'R', 'Rich', 'Nugent', '0.535', '', ''],
['House', 'FL', 'R', 'Gus', 'Bilirakis', '0.393', '', ''],
['House', 'FL', 'R', 'Bill', 'Young', '0.333', '', ''],
['House', 'FL', 'R', 'David', 'Jolly', '0.239', '', ''],
['House', 'FL', 'D', 'Kathy', 'Castor', '-0.423', '', ''],
['House', 'FL', 'R', 'Dennis', 'Ross', '0.604', 'Dennis A.', ''],
['House', 'FL', 'R', 'Vern', 'Buchanan', '0.372', '', ''],
['House', 'FL', 'R', 'Tom', 'Rooney', '0.509', '', ''],
['House', 'FL', 'D', 'Patrick', 'Murphy', '-0.146', '', ''],
['House', 'FL', 'R', 'Trey', 'Radel', '0.725', '', ''],
['House', 'FL', 'R', 'Curt', 'Clawson', '0.752', '', ''],
['House', 'FL', 'D', 'Alcee', 'Hastings', '-0.573', '', ''],
['House', 'FL', 'D', 'Ted', 'Deutch', '-0.426', '', ''],
['House', 'FL', 'D', 'Lois', 'Frankel', '-0.44', '', ''],
['House', 'FL', 'D', 'Debbie', 'Wasserman Schultz', '-0.417', '', ''],
['House', 'FL', 'D', 'Frederica', 'Wilson', '-0.47', '', ''],
['House', 'FL', 'R', 'Mario', 'Diaz-Balart', '0.308', '', ''],
['House', 'FL', 'D', 'Joe', 'Garcia', '-0.184', '', ''],
['House', 'FL', 'R', 'Ileana', 'Ros-Lehtinen', '0.26', '', ''],
['House', 'GA', 'R', 'Jack', 'Kingston', '0.567', '', ''],
['House', 'GA', 'D', 'Sanford', 'Bishop', '-0.264', '', ''],
['House', 'GA', 'R', 'Lynn', 'Westmoreland', '0.713', '', ''],
['House', 'GA', 'D', 'Hank', 'Johnson', '-0.458', '', ''],
['House', 'GA', 'D', 'John', 'Lewis', '-0.597', '', ''],
['House', 'GA', 'R', 'Tom', 'Price', '0.68', '', ''],
['House', 'GA', 'R', 'Rob', 'Woodall', '0.757', 'Robert', ''],
['House', 'GA', 'R', 'Austin', 'Scott', '0.623', '', ''],
['House', 'GA', 'R', 'Doug', 'Collins', '0.696', '', ''],
['House', 'GA', 'R', 'Paul', 'Broun', '0.983', '', ''],
['House', 'GA', 'R', 'Phil', 'Gingrey', '0.596', '', ''],
['House', 'GA', 'D', 'John', 'Barrow', '-0.115', '', ''],
['House', 'GA', 'D', 'David', 'Scott', '-0.308', '', ''],
['House', 'GA', 'R', 'Tom', 'Graves', '0.871', '', ''],
['House', 'HI', 'D', 'Colleen', 'Hanabusa', '-0.374', '', ''],
['House', 'HI', 'D', 'Tulsi', 'Gabbard', '-0.291', '', ''],
['House', 'IA', 'D', 'Bruce', 'Braley', '-0.317', '', ''],
['House', 'IA', 'D', 'David', 'Loebsack', '-0.284', 'Dave', ''],
['House', 'IA', 'R', 'Tom', 'Latham', '0.328', '', ''],
['House', 'IA', 'R', 'Steve', 'King', '0.661', '', ''],
['House', 'ID', 'R', 'Raul', 'Labrador', '0.866', '', ''],
['House', 'ID', 'R', 'Mike', 'Simpson', '0.322', '', ''],
['House', 'IL', 'D', 'Bobby', 'Rush', '-0.495', '', ''],
['House', 'IL', 'D', 'Robin', 'Kelly', '-0.464', '', ''],
['House', 'IL', 'D', 'Dan', 'Lipinski', '-0.241', '', ''],
['House', 'IL', 'D', 'Luis', 'Gutierrez', '-0.501', '', ''],
['House', 'IL', 'D', 'Mike', 'Quigley', '-0.336', '', ''],
['House', 'IL', 'R', 'Peter', 'Roskam', '0.474', '', ''],
['House', 'IL', 'D', 'Danny', 'Davis', '-0.51', 'Danny K.', ''],
['House', 'IL', 'D', 'Tammy', 'Duckworth', '-0.267', '', ''],
['House', 'IL', 'D', 'Jan', 'Schakowsky', '-0.614', 'Janice', ''],
['House', 'IL', 'D', 'Brad', 'Schneider', '-0.195', '', ''],
['House', 'IL', 'D', 'Bill', 'Foster', '-0.203', '', ''],
['House', 'IL', 'D', 'Bill', 'Enyart', '-0.256', 'William', ''],
['House', 'IL', 'R', 'Rodney', 'Davis', '0.412', '', ''],
['House', 'IL', 'R', 'Randy', 'Hultgren', '0.537', '', ''],
['House', 'IL', 'R', 'John', 'Shimkus', '0.401', '', ''],
['House', 'IL', 'R', 'Adam', 'Kinzinger', '0.347', '', ''],
['House', 'IL', 'D', 'Cheri', 'Bustos', '-0.212', '', ''],
['House', 'IL', 'R', 'Aaron', 'Schock', '0.345', '', ''],
['House', 'IN', 'D', 'Peter', 'Visclosky', '-0.403', 'Pete', ''],
['House', 'IN', 'R', 'Jackie', 'Walorski', '0.419', '', ''],
['House', 'IN', 'R', 'Marlin', 'Stutzman', '0.824', '', ''],
['House', 'IN', 'R', 'Todd', 'Rokita', '0.671', '', ''],
['House', 'IN', 'R', 'Susan', 'Brooks', '0.438', '', ''],
['House', 'IN', 'R', 'Luke', 'Messer', '0.593', '', ''],
['House', 'IN', 'D', 'Andre', 'Carson', '-0.417', '', ''],
['House', 'IN', 'R', 'Larry', 'Bucshon', '0.442', '', ''],
['House', 'IN', 'R', 'Todd', 'Young', '0.544', '', ''],
['House', 'KS', 'R', 'Tim', 'Huelskamp', '0.811', '', ''],
['House', 'KS', 'R', 'Lynn', 'Jenkins', '0.563', '', ''],
['House', 'KS', 'R', 'Kevin', 'Yoder', '0.624', '', ''],
['House', 'KS', 'R', 'Mike', 'Pompeo', '0.717', '', ''],
['House', 'KY', 'R', 'Ed', 'Whitfield', '0.318', '', ''],
['House', 'KY', 'R', 'Brett', 'Guthrie', '0.391', '', ''],
['House', 'KY', 'D', 'John', 'Yarmuth', '-0.394', '', ''],
['House', 'KY', 'R', 'Thomas', 'Massie', '0.98', '', ''],
['House', 'KY', 'R', 'Hal', 'Rogers', '0.342', '', ''],
['House', 'KY', 'R', 'Andy', 'Barr', '0.488', '', ''],
['House', 'LA', 'R', 'Steve', 'Scalise', '0.597', '', ''],
['House', 'LA', 'D', 'Cedric', 'Richmond', '-0.441', '', ''],
['House', 'LA', 'R', 'Charles', 'Boustany', '0.427', '', ''],
['House', 'LA', 'R', 'John', 'Fleming', '0.596', '', ''],
['House', 'LA', 'R', 'Rodney', 'Alexander', '0.356', '', ''],
['House', 'LA', 'R', 'Vance', 'McAllister', '0.412', '', ''],
['House', 'LA', 'R', 'Bill', 'Cassidy', '0.477', '', ''],
['House', 'MA', 'D', 'Richard', 'Neal', '-0.427', '', ''],
['House', 'MA', 'D', 'Jim', 'McGovern', '-0.553', '', ''],
['House', 'MA', 'D', 'Niki', 'Tsongas', '-0.43', '', ''],
['House', 'MA', 'D', 'Joe', 'Kennedy III', '-0.463', 'Joseph', 'Kennedy'],
['House', 'MA', 'D', 'Ed', 'Markey', '-0.512', '', ''],
['House', 'MA', 'D', 'Katherine', 'Clark', '-0.562', '', ''],
['House', 'MA', 'D', 'John', 'Tierney', '-0.513', '', ''],
['House', 'MA', 'D', 'Michael', 'Capuano', '-0.592', 'Mike', ''],
['House', 'MA', 'D', 'Steve', 'Lynch', '-0.354', 'Stephen', 'F. Lynch'],
['House', 'MA', 'D', 'Bill', 'Keating', '-0.354', '', ''],
['House', 'MD', 'R', 'Andy', 'Harris', '0.606', 'Andrew', ''],
['House', 'MD', 'D', 'Dutch', 'Ruppersberger', '-0.288', '', ''],
['House', 'MD', 'D', 'John', 'Sarbanes', '-0.455', '', ''],
['House', 'MD', 'D', 'Donna', 'Edwards', '-0.595', '', ''],
['House', 'MD', 'D', 'Steny', 'Hoyer', '-0.377', '', ''],
['House', 'MD', 'D', 'John', 'Delaney', '-0.288', '', ''],
['House', 'MD', 'D', 'Elijah', 'Cummings', '-0.448', '', ''],
['House', 'MD', 'D', 'Chris', 'Van Hollen', '-0.405', '', ''],
['House', 'ME', 'D', 'Chellie', 'Pingree', '-0.485', '', ''],
['House', 'ME', 'D', 'Michael', 'Michaud', '-0.293', '', ''],
['House', 'MI', 'R', 'Dan', 'Benishek', '0.602', '', ''],
['House', 'MI', 'R', 'Bill', 'Huizenga', '0.707', '', ''],
['House', 'MI', 'R', 'Justin', 'Amash', '0.898', '', ''],
['House', 'MI', 'R', 'Dave', 'Camp', '0.397', '', ''],
['House', 'MI', 'D', 'Dan', 'Kildee', '-0.423', '', ''],
['House', 'MI', 'R', 'Fred', 'Upton', '0.346', '', ''],
['House', 'MI', 'R', 'Tim', 'Walberg', '0.563', '', ''],
['House', 'MI', 'R', 'Mike', 'Rogers', '0.434', '', ''],
['House', 'MI', 'D', 'Sander', 'Levin', '-0.378', '', ''],
['House', 'MI', 'R', 'Candice', 'Miller', '0.352', '', ''],
['House', 'MI', 'R', 'Kerry', 'Bentivolio', '0.81', '', ''],
['House', 'MI', 'D', 'John', 'Dingell', '-0.445', '', ''],
['House', 'MI', 'D', 'John', 'Conyers', '-0.687', '', ''],
['House', 'MI', 'D', 'Gary', 'Peters', '-0.224', '', ''],
['House', 'MN', 'D', 'Tim', 'Walz', '-0.285', '', ''],
['House', 'MN', 'R', 'John', 'Kline', '0.532', '', ''],
['House', 'MN', 'R', 'Erik', 'Paulsen', '0.451', '', ''],
['House', 'MN', 'D', 'Betty', 'McCollum', '-0.429', '', ''],
['House', 'MN', 'D', 'Keith', 'Ellison', '-0.583', '', ''],
['House', 'MN', 'R', 'Michele', 'Bachmann', '0.618', '', ''],
['House', 'MN', 'D', 'Collin', 'Peterson', '-0.155', '', ''],
['House', 'MN', 'D', 'Rick', 'Nolan', '-0.411', '', ''],
['House', 'MO', 'D', 'Lacy', 'Clay', '-0.501', '', ''],
['House', 'MO', 'R', 'Ann', 'Wagner', '0.481', '', ''],
['House', 'MO', 'R', 'Blaine', 'Luetkemeyer', '0.487', '', ''],
['House', 'MO', 'R', 'Vicky', 'Hartzler', '0.526', '', ''],
['House', 'MO', 'D', 'Emanuel', 'Cleaver', '-0.442', '', ''],
['House', 'MO', 'R', 'Samuel', 'Graves', '0.471', 'Sam', ''],
['House', 'MO', 'R', 'Billy', 'Long', '0.628', '', ''],
['House', 'MO', 'R', 'Jason', 'Smith', '0.634', '', ''],
['House', 'MS', 'R', 'Alan', 'Nunnelee', '0.503', '', ''],
['House', 'MS', 'D', 'Bennie', 'Thompson', '-0.5', '', ''],
['House', 'MS', 'R', 'Gregg', 'Harper', '0.422', '', ''],
['House', 'MS', 'R', 'Steven', 'Palazzo', '0.514', '', ''],
['House', 'MT', 'R', 'Steve', 'Daines', '0.501', '', ''],
['House', 'NC', 'D', 'G.K.', 'Butterfield', '-0.392', 'G. K.', ''],
['House', 'NC', 'R', 'Renee', 'Ellmers', '0.451', '', ''],
['House', 'NC', 'R', 'Walter Beaman', 'Jones', '0.211', 'Walter', 'Jones Jr.'],
['House', 'NC', 'D', 'David Eugene', 'Price', '-0.341', 'David', ''],
['House', 'NC', 'R', 'Virginia', 'Foxx', '0.695', '', ''],
['House', 'NC', 'R', 'John Howard', 'Coble', '0.532', 'Howard', ''],
['House', 'NC', 'D', 'Mike', 'McIntyre', '-0.148', '', ''],
['House', 'NC', 'R', 'Richard', 'Hudson', '0.73', '', ''],
['House', 'NC', 'R', 'Robert', 'Pittenger', '0.627', '', ''],
['House', 'NC', 'R', 'Patrick', 'McHenry', '0.624', '', ''],
['House', 'NC', 'R', 'Mark', 'Meadows', '0.662', '', ''],
['House', 'NC', 'D', 'Mel', 'Watt', '-0.532', '', ''],
['House', 'NC', 'D', 'Alma', 'Adams', '-0.437', '', ''],
['House', 'NC', 'R', 'George', 'Holding', '0.717', '', ''],
['House', 'ND', 'R', 'Kevin', 'Cramer', '0.346', '', ''],
['House', 'NE', 'R', 'Jeff', 'Fortenberry', '0.314', '', ''],
['House', 'NE', 'R', 'Lee', 'Terry', '0.464', '', ''],
['House', 'NE', 'R', 'Adrian', 'Smith', '0.539', 'Adrian M.', ''],
['House', 'NH', 'D', 'Carol', 'Shea-Porter', '-0.324', '', ''],
['House', 'NH', 'D', 'Annie', 'Kuster', '-0.275', 'Ann McLane', ''],
['House', 'NJ', 'D', 'Rob', 'Andrews', '-0.304', '', ''],
['House', 'NJ', 'D', 'Donald', 'Norcross', '-0.406', '', ''],
['House', 'NJ', 'R', 'Frank', 'LoBiondo', '0.218', '', ''],
['House', 'NJ', 'R', 'Jon', 'Runyan', '0.241', '', ''],
['House', 'NJ', 'R', 'Christopher', 'Smith', '0.153', 'Chris', ''],
['House', 'NJ', 'R', 'Scott', 'Garrett', '0.73', '', ''],
['House', 'NJ', 'D', 'Frank', 'Pallone', '-0.406', '', ''],
['House', 'NJ', 'R', 'Leonard', 'Lance', '0.355', '', ''],
['House', 'NJ', 'D', 'Albio', 'Sires', '-0.399', '', ''],
['House', 'NJ', 'D', 'Bill', 'Pascrell', '-0.37', '', ''],
['House', 'NJ', 'D', 'Donald', 'Payne Jr.', '-0.519', '', 'Payne'],
['House', 'NJ', 'R', 'Rodney', 'Frelinghuysen', '0.307', '', ''],
['House', 'NJ', 'D', 'Rush', 'Holt', '-0.479', '', ''],
['House', 'NM', 'D', 'Michelle', 'Lujan-Grisham', '-0.335', '', ''],
['House', 'NM', 'R', 'Steve', 'Pearce', '0.493', '', ''],
['House', 'NM', 'D', 'Ben Ray', 'Lujan', '-0.374', '', ''],
['House', 'NV', 'D', 'Dina', 'Titus', '-0.304', '', ''],
['House', 'NV', 'R', 'Mark', 'Amodei', '0.457', '', ''],
['House', 'NV', 'R', 'Joe', 'Heck', '0.373', '', ''],
['House', 'NV', 'D', 'Steven', 'Horsford', '-0.368', '', ''],
['House', 'NY', 'D', 'Timothy', 'Bishop', '-0.331', '', ''],
['House', 'NY', 'R', 'Peter', 'King', '0.283', '', ''],
['House', 'NY', 'D', 'Steve', 'Israel', '-0.321', '', ''],
['House', 'NY', 'D', 'Carolyn', 'McCarthy', '-0.294', '', ''],
['House', 'NY', 'D', 'Gregory', 'Meeks', '-0.43', '', ''],
['House', 'NY', 'D', 'Grace', 'Meng', '-0.395', '', ''],
['House', 'NY', 'D', 'Nydia', 'Velazquez', '-0.568', '', ''],
['House', 'NY', 'D', 'Hakeem', 'Jeffries', '-0.481', '', ''],
['House', 'NY', 'D', 'Yvette', 'Clarke', '-0.607', '', ''],
['House', 'NY', 'D', 'Jerrold', 'Nadler', '-0.529', '', ''],
['House', 'NY', 'R', 'Michael', 'Grimm', '0.236', '', ''],
['House', 'NY', 'D', 'Carolyn', 'Maloney', '-0.401', '', ''],
['House', 'NY', 'D', 'Charles', 'Rangel', '-0.528', '', ''],
['House', 'NY', 'D', 'Joseph', 'Crowley', '-0.412', 'Joe', ''],
['House', 'NY', 'D', 'Jose', 'Serrano', '-0.503', 'Jose E.', ''],
['House', 'NY', 'D', 'Eliot', 'Engel', '-0.416', '', ''],
['House', 'NY', 'D', 'Nita', 'Lowey', '-0.394', '', ''],
['House', 'NY', 'D', 'Sean', 'Maloney', '-0.195', 'Sean Patrick', ''],
['House', 'NY', 'R', 'Chris', 'Gibson', '0.232', '', ''],
['House', 'NY', 'D', 'Paul', 'Tonko', '-0.44', '', ''],
['House', 'NY', 'D', 'Bill', 'Owens', '-0.164', '', ''],
['House', 'NY', 'R', 'Richard', 'Hanna', '0.277', '', ''],
['House', 'NY', 'R', 'Tom', 'Reed', '0.374', 'Thomas', ''],
['House', 'NY', 'D', 'Dan', 'Maffei', '-0.182', 'Daniel', ''],
['House', 'NY', 'D', 'Louise', 'Slaughter', '-0.468', '', ''],
['House', 'NY', 'D', 'Brian', 'Higgins', '-0.351', '', ''],
['House', 'NY', 'R', 'Chris', 'Collins', '0.397', '', ''],
['House', 'OH', 'R', 'Steve', 'Chabot', '0.611', '', ''],
['House', 'OH', 'R', 'Brad', 'Wenstrup', '0.593', '', ''],
['House', 'OH', 'D', 'Joyce', 'Beatty', '-0.467', '', ''],
['House', 'OH', 'R', 'Jim', 'Jordan', '0.719', '', ''],
['House', 'OH', 'R', 'Bob', 'Latta', '0.541', '', ''],
['House', 'OH', 'R', 'Bill', 'Johnson', '0.506', '', ''],
['House', 'OH', 'R', 'Bob', 'Gibbs', '0.458', '', ''],
['House', 'OH', 'R', 'John', 'Boehner', '0.53', '', ''],
['House', 'OH', 'D', 'Marcy', 'Kaptur', '-0.355', '', ''],
['House', 'OH', 'R', 'Mike', 'Turner', '0.284', '', ''],
['House', 'OH', 'D', 'Marcia', 'Fudge', '-0.561', '', ''],
['House', 'OH', 'R', 'Pat', 'Tiberi', '0.42', '', ''],
['House', 'OH', 'D', 'Tim', 'Ryan', '-0.405', '', ''],
['House', 'OH', 'R', 'Dave', 'Joyce', '0.316', 'David', ''],
['House', 'OH', 'R', 'Steve', 'Stivers', '0.35', '', ''],
['House', 'OH', 'R', 'Jim', 'Renacci', '0.445', '', ''],
['House', 'OK', 'R', 'Jim', 'Bridenstine', '0.832', '', ''],
['House', 'OK', 'R', 'Markwayne', 'Mullin', '0.528', '', ''],
['House', 'OK', 'R', 'Frank Dean', 'Lucas', '0.38', 'Frank', ''],
['House', 'OK', 'R', 'Tom', 'Cole', '0.371', '', ''],
['House', 'OK', 'R', 'James', 'Lankford', '0.58', '', ''],
['House', 'OR', 'D', 'Suzanne', 'Bonamici', '-0.429', '', ''],
['House', 'OR', 'R', 'Greg', 'Walden', '0.362', '', ''],
['House', 'OR', 'D', 'Earl', 'Blumenauer', '-0.456', '', ''],
['House', 'OR', 'D', 'Peter', 'DeFazio', '-0.467', '', ''],
['House', 'OR', 'D', 'Kurt', 'Schrader', '-0.214', '', ''],
['House', 'PA', 'D', 'Robert', 'Brady', '-0.48', 'Bob', ''],
['House', 'PA', 'D', 'Chaka', 'Fattah', '-0.473', '', ''],
['House', 'PA', 'R', 'Mike', 'Kelly', '0.328', '', ''],
['House', 'PA', 'R', 'Scott', 'Perry', '0.645', '', ''],
['House', 'PA', 'R', 'Glenn', 'Thompson', '0.334', '', ''],
['House', 'PA', 'R', 'Jim', 'Gerlach', '0.25', '', ''],
['House', 'PA', 'R', 'Patrick', 'Meehan', '0.244', 'Pat', ''],
['House', 'PA', 'R', 'Mike', 'Fitzpatrick', '0.244', '', ''],
['House', 'PA', 'R', 'Bill', 'Shuster', '0.412', '', ''],
['House', 'PA', 'R', 'Tom', 'Marino', '0.378', '', ''],
['House', 'PA', 'R', 'Lou', 'Barletta', '0.276', '', ''],
['House', 'PA', 'R', 'Keith', 'Rothfus', '0.488', '', ''],
['House', 'PA', 'D', 'Allyson', 'Schwartz', '-0.336', '', ''],
['House', 'PA', 'D', 'Mike', 'Doyle', '-0.331', 'Michael F.', ''],
['House', 'PA', 'R', 'Charlie', 'Dent', '0.264', 'Charles', ''],
['House', 'PA', 'R', 'Joseph', 'Pitts', '0.577', 'Joe', ''],
['House', 'PA', 'D', 'Matt', 'Cartwright', '-0.463', '', ''],
['House', 'PA', 'R', 'Tim', 'Murphy', '0.263', 'Timothy F.', ''],
['House', 'RI', 'D', 'David', 'Cicilline', '-0.433', '', ''],
['House', 'RI', 'D', 'James', 'Langevin', '-0.371', '', ''],
['House', 'SC', 'R', 'Mark', 'Sanford', '0.881', '', ''],
['House', 'SC', 'R', 'Joe', 'Wilson', '0.584', '', ''],
['House', 'SC', 'R', 'Jeff', 'Duncan', '0.847', '', ''],
['House', 'SC', 'R', 'Trey', 'Gowdy', '0.742', '', ''],
['House', 'SC', 'R', 'Mick', 'Mulvaney', '0.87', '', ''],
['House', 'SC', 'D', 'James', 'Clyburn', '-0.452', 'Jim', ''],
['House', 'SC', 'R', 'Tom', 'Rice', '0.664', '', ''],
['House', 'SD', 'R', 'Kristi', 'Noem', '0.382', '', ''],
['House', 'TN', 'R', 'Phil', 'Roe', '0.507', '', ''],
['House', 'TN', 'R', 'Jimmy', 'Duncan', '0.631', '', ''],
['House', 'TN', 'R', 'Chuck', 'Fleischmann', '0.515', '', ''],
['House', 'TN', 'R', 'Scott', 'DesJarlais', '0.569', '', ''],
['House', 'TN', 'D', 'Jim', 'Cooper', '-0.161', '', ''],
['House', 'TN', 'R', 'Diane', 'Black', '0.601', '', ''],
['House', 'TN', 'R', 'Marsha', 'Blackburn', '0.642', '', ''],
['House', 'TN', 'R', 'Stephen', 'Fincher', '0.57', '', ''],
['House', 'TN', 'D', 'Steve', 'Cohen', '-0.43', '', ''],
['House', 'TX', 'R', 'Louie', 'Gohmert', '0.601', '', ''],
['House', 'TX', 'R', 'Ted', 'Poe', '0.627', '', ''],
['House', 'TX', 'R', 'Sam', 'Johnson', '0.63', '', ''],
['House', 'TX', 'R', 'Ralph Moody', 'Hall', '0.457', 'Ralph', ''],
['House', 'TX', 'R', 'Jeb', 'Hensarling', '0.754', '', ''],
['House', 'TX', 'R', 'Joe Linus', 'Barton', '0.545', 'Joe', ''],
['House', 'TX', 'R', 'John', 'Culberson', '0.529', '', ''],
['House', 'TX', 'R', 'Kevin', 'Brady', '0.542', '', ''],
['House', 'TX', 'D', 'Al', 'Green', '-0.407', '', ''],
['House', 'TX', 'R', 'Michael', 'McCaul', '0.466', '', ''],
['House', 'TX', 'R', 'Mike', 'Conaway', '0.624', 'Michael', ''],
['House', 'TX', 'R', 'Kay', 'Granger', '0.419', '', ''],
['House', 'TX', 'R', 'Mac', 'Thornberry', '0.568', '', ''],
['House', 'TX', 'R', 'Randy', 'Weber', '0.828', '', ''],
['House', 'TX', 'D', 'Ruben', 'Hinojosa', '-0.324', '', ''],
['House', 'TX', 'D', 'Beto', "O'Rourke", '-0.402', '', ''],
['House', 'TX', 'R', 'Bill', 'Flores', '0.624', '', ''],
['House', 'TX', 'D', 'Sheila', 'Jackson Lee', '-0.451', '', ''],
['House', 'TX', 'R', 'Randy', 'Neugebauer', '0.656', '', ''],
['House', 'TX', 'D', 'Joaquin', 'Castro', '-0.403', '', ''],
['House', 'TX', 'R', 'Lamar', 'Smith', '0.426', 'Lamar S.', ''],
['House', 'TX', 'R', 'Pete', 'Olson', '0.56', '', ''],
['House', 'TX', 'D', 'Pete', 'Gallego', '-0.219', '', ''],
['House', 'TX', 'R', 'Kenny', 'Marchant', '0.622', '', ''],
['House', 'TX', 'R', 'Roger', 'Williams', '0.622', '', ''],
['House', 'TX', 'R', 'Michael', 'Burgess', '0.581', 'Michael C.', ''],
['House', 'TX', 'R', 'Blake', 'Farenthold', '0.551', '', ''],
['House', 'TX', 'D', 'Henry', 'Cuellar', '-0.216', '', ''],
['House', 'TX', 'D', 'Gene', 'Green', '-0.32', '', ''],
['House', 'TX', 'D', 'Eddie Bernice', 'Johnson', '-0.484', 'Eddie', ''],
['House', 'TX', 'R', 'John', 'Carter', '0.501', '', ''],
['House', 'TX', 'R', 'Pete', 'Sessions', '0.62', '', ''],
['House', 'TX', 'D', 'Marc', 'Veasey', '-0.401', '', ''],
['House', 'TX', 'D', 'Filemon', 'Vela', '-0.312', '', ''],
['House', 'TX', 'D', 'Lloyd', 'Doggett', '-0.418', '', ''],
['House', 'TX', 'R', 'Steve', 'Stockman', '0.974', '', ''],
['House', 'UT', 'R', 'Rob', 'Bishop', '0.563', '', ''],
['House', 'UT', 'R', 'Chris', 'Stewart', '0.505', '', ''],
['House', 'UT', 'R', 'Jason', 'Chaffetz', '0.719', '', ''],
['House', 'UT', 'D', 'Jim', 'Matheson', '-0.104', '', ''],
['House', 'VA', 'R', 'Robert', 'Wittman', '0.415', 'Rob', ''],
['House', 'VA', 'R', 'Scott', 'Rigell', '0.501', '', ''],
['House', 'VA', 'D', 'Bobby', 'Scott', '-0.456', '', ''],
['House', 'VA', 'R', 'Randy', 'Forbes', '0.426', '', ''],
['House', 'VA', 'R', 'Robert', 'Hurt', '0.61', '', ''],
['House', 'VA', 'R', 'Bob', 'Goodlatte', '0.508', '', ''],
['House', 'VA', 'R', 'Eric', 'Cantor', '0.555', '', ''],
['House', 'VA', 'R', 'Dave', 'Brat', '0.496', 'David', ''],
['House', 'VA', 'D', 'Jerry', 'Moran', '-0.309', 'Jim', ''],
['House', 'VA', 'R', 'Morgan', 'Griffith', '0.558', '', ''],
['House', 'VA', 'R', 'Frank', 'Wolf', '0.287', '', ''],
['House', 'VA', 'D', 'Gerry', 'Connolly', '-0.288', '', ''],
['House', 'VT', 'D', 'Peter', 'Welch', '-0.457', '', ''],
['House', 'WA', 'D', 'Suzan', 'DelBene', '-0.263', '', ''],
['House', 'WA', 'D', 'Rick', 'Larsen', '-0.37', '', ''],
['House', 'WA', 'R', 'Jaime', 'Herrera Beutler', '0.43', '', ''],
['House', 'WA', 'R', 'Doc', 'Hastings', '0.439', '', ''],
['House', 'WA', 'R', 'Cathy', 'McMorris-Rodgers', '0.454', '', 'McMorris'],
['House', 'WA', 'D', 'Derek', 'Kilmer', '-0.282', '', ''],
['House', 'WA', 'D', 'Jim', 'McDermott', '-0.679', '', ''],
['House', 'WA', 'R', 'Dave', 'Reichert', '0.241', '', ''],
['House', 'WA', 'D', 'David Adam', 'Smith', '-0.276', 'Adam', ''],
['House', 'WA', 'D', 'Denny', 'Heck', '-0.337', 'Dennis', ''],
['House', 'WI', 'R', 'Paul', 'Ryan', '0.586', '', ''],
['House', 'WI', 'D', 'Mark', 'Pocan', '-0.698', '', ''],
['House', 'WI', 'D', 'Ron', 'Kind', '-0.27', '', ''],
['House', 'WI', 'D', 'Gwen', 'Moore', '-0.55', '', ''],
['House', 'WI', 'R', 'James', 'Sensenbrenner', '0.672', 'Jim', ''],
['House', 'WI', 'R', 'Tom', 'Petri', '0.383', '', ''],
['House', 'WI', 'R', 'Sean', 'Duffy', '0.549', '', ''],
['House', 'WI', 'R', 'Reid', 'Ribble', '0.693', '', ''],
['House', 'WV', 'R', 'David', 'McKinley', '0.295', '', ''],
['House', 'WV', 'R', 'Shelley Moore', 'Capito', '0.268', 'Shelley', ''],
['House', 'WV', 'D', 'Nick', 'Rahall', '-0.292', '', ''],
['House', 'WY', 'R', 'Cynthia', 'Lummis', '0.703', '', ''],
['President', 'US', 'D', 'Barack', 'Obama', '-0.368', 'Barack Hussein', ''],
['Senate', 'AK', 'R', 'Lisa', 'Murkowski', '0.192', '', ''],
['Senate', 'AK', 'D', 'Mark', 'Begich', '-0.257', '', ''],
['Senate', 'AL', 'R', 'Jeff', 'Sessions', '0.545', '', ''],
['Senate', 'AL', 'R', 'Richard', 'Shelby', '0.428', '', ''],
['Senate', 'AR', 'D', 'Mark', 'Pryor', '-0.201', '', ''],
['Senate', 'AR', 'R', 'John', 'Boozman', '0.415', '', ''],
['Senate', 'AZ', 'R', 'Jeff', 'Flake', '0.958', '', ''],
['Senate', 'AZ', 'R', 'John', 'McCain', '0.378', '', ''],
['Senate', 'CA', 'D', 'Barbara', 'Boxer', '-0.465', '', ''],
['Senate', 'CA', 'D', 'Dianne', 'Feinstein', '-0.279', '', ''],
['Senate', 'CN', 'D', 'Richard', 'Blumenthal', '-0.417', '', ''],
['Senate', 'CN', 'D', 'Chris', 'Murphy', '-0.317', '', ''],
['Senate', 'CO', 'D', 'Mark', 'Udall', '-0.359', '', ''],
['Senate', 'CO', 'D', 'Michael', 'Bennet', '-0.231', '', ''],
['Senate', 'DE', 'D', 'Chris', 'Coons', '-0.314', '', ''],
['Senate', 'DE', 'D', 'Tom', 'Carper', '-0.182', '', ''],
['Senate', 'FL', 'R', 'Marco', 'Rubio', '0.579', '', ''],
['Senate', 'FL', 'D', 'Bill', 'Nelson', '-0.196', '', ''],
['Senate', 'GA', 'R', 'Saxby', 'Chambliss', '0.435', '', ''],
['Senate', 'GA', 'R', 'Johnny', 'Isakson', '0.416', '', ''],
['Senate', 'HI', 'D', 'Mazie', 'Hirono', '-0.511', '', ''],
['Senate', 'HI', 'D', 'Brian', 'Schatz', '-0.477', '', ''],
['Senate', 'IA', 'R', 'Chuck', 'Grassley', '0.343', '', ''],
['Senate', 'IA', 'D', 'Tom', 'Harkin', '-0.372', '', ''],
['Senate', 'ID', 'R', 'Jim', 'Risch', '0.672', '', ''],
['Senate', 'ID', 'R', 'Michael', 'Crapo', '0.501', 'Mike', ''],
['Senate', 'IL', 'D', 'Richard', 'Durbin', '-0.375', 'Dick', ''],
['Senate', 'IL', 'R', 'Mark', 'Kirk', '0.286', '', ''],
['Senate', 'IN', 'R', 'Daniel', 'Coats', '0.37', 'Dan', ''],
['Senate', 'IN', 'D', 'Joe', 'Donnelly', '-0.125', '', ''],
['Senate', 'KS', 'R', 'Jerry', 'Moran', '0.431', '', ''],
['Senate', 'KS', 'R', 'Pat', 'Roberts', '0.419', '', ''],
['Senate', 'KY', 'R', 'Rand', 'Paul', '0.974', '', ''],
['Senate', 'KY', 'R', 'Mitch', 'McConnell', '0.419', '', ''],
['Senate', 'LA', 'R', 'David', 'Vitter', '0.505', '', ''],
['Senate', 'LA', 'D', 'Mary', 'Landrieu', '-0.204', '', ''],
['Senate', 'MA', 'D', 'Elizabeth', 'Warren', '-0.681', '', ''],
['Senate', 'MA', 'D', 'Mo', 'Cowan', '-0.441', '', ''],
['Senate', 'MD', 'D', 'Barbara', 'Mikulski', '-0.385', '', ''],
['Senate', 'MD', 'D', 'Ben', 'Cardin', '-0.337', '', ''],
['Senate', 'ME', 'R', 'Susan', 'Collins', '0.088', '', ''],
['Senate', 'ME', 'D', 'Angus', 'King', '-0.184', '', ''],
['Senate', 'MI', 'D', 'Debbie', 'Stabenow', '-0.335', '', ''],
['Senate', 'MI', 'D', 'Carl', 'Levin', '-0.411', '', ''],
['Senate', 'MN', 'D', 'Amy', 'Klobuchar', '-0.254', '', ''],
['Senate', 'MN', 'D', 'Al', 'Franken', '-0.433', '', ''],
['Senate', 'MO', 'D', 'Claire', 'McCaskill', '-0.164', '', ''],
['Senate', 'MO', 'R', 'Roy', 'Blunt', '0.453', '', ''],
['Senate', 'MS', 'R', 'Thad', 'Cochran', '0.291', '', ''],
['Senate', 'MS', 'R', 'Roger', 'Wicker', '0.388', '', ''],
['Senate', 'MT', 'D', 'Max', 'Baucus', '-0.226', '', ''],
['Senate', 'MT', 'D', 'John', 'Walsh', '-0.228', '', ''],
['Senate', 'MT', 'D', 'Jon', 'Tester', '-0.23', '', ''],
['Senate', 'NC', 'R', 'Richard', 'Burr', '0.469', '', ''],
['Senate', 'NC', 'D', 'Kay', 'Hagan', '-0.213', '', ''],
['Senate', 'ND', 'D', 'Heidi', 'Heitkamp', '-0.209', '', ''],
['Senate', 'ND', 'R', 'John', 'Hoeven', '0.339', '', ''],
['Senate', 'NE', 'R', 'Mike', 'Johanns', '0.405', '', ''],
['Senate', 'NE', 'R', 'Deb', 'Fischer', '0.488', '', ''],
['Senate', 'NH', 'R', 'Kelly', 'Ayotte', '0.368', '', ''],
['Senate', 'NH', 'D', 'Jeanne', 'Shaheen', '-0.294', '', ''],
['Senate', 'NJ', 'D', 'Bob', 'Menendez', '-0.372', '', ''],
['Senate', 'NJ', 'D', 'Frank', 'Lautenberg', '-0.403', '', ''],
['Senate', 'NJ', 'D', 'Cory', 'Booker', '-0.461', '', ''],
['Senate', 'NM', 'D', 'Martin', 'Heinrich', '-0.284', '', ''],
['Senate', 'NM', 'D', 'Tom', 'Udall', '-0.46', '', ''],
['Senate', 'NV', 'R', 'Dean', 'Heller', '0.473', '', ''],
['Senate', 'NV', 'D', 'Harry', 'Reid', '-0.289', '', ''],
['Senate', 'NY', 'D', 'Kirsten', 'Gillibrand', '-0.297', '', ''],
['Senate', 'NY', 'D', 'Charles', 'Schumer', '-0.362', 'Chuck', ''],
['Senate', 'OH', 'D', 'Sherrod', 'Brown', '-0.452', '', ''],
['Senate', 'OH', 'R', 'Rob', 'Portman', '0.388', '', ''],
['Senate', 'OK', 'R', 'James', 'Inhofe', '0.556', 'Jim', ''],
['Senate', 'OK', 'R', 'Tom', 'Coburn', '0.807', '', ''],
['Senate', 'OR', 'D', 'Jeff', 'Merkley', '-0.396', '', ''],
['Senate', 'OR', 'D', 'Ron', 'Wyden', '-0.324', '', ''],
['Senate', 'PA', 'D', 'Bob', 'Casey', '-0.308', '', ''],
['Senate', 'PA', 'R', 'Pat', 'Toomey', '0.656', '', ''],
['Senate', 'RI', 'D', 'Sheldon', 'Whitehouse', '-0.457', '', ''],
['Senate', 'RI', 'D', 'Jack', 'Reed', '-0.401', '', ''],
['Senate', 'SC', 'R', 'Tim', 'Scott', '0.731', '', ''],
['Senate', 'SC', 'R', 'Lindsey', 'Graham', '0.422', '', ''],
['Senate', 'SD', 'R', 'John', 'Thune', '0.416', '', ''],
['Senate', 'SD', 'D', 'Tim', 'Johnson', '-0.261', '', ''],
['Senate', 'TN', 'R', 'Bob', 'Corker', '0.378', '', ''],
['Senate', 'TN', 'R', 'Lamar', 'Alexander', '0.324', '', ''],
['Senate', 'TX', 'R', 'John', 'Cornyn', '0.517', '', ''],
['Senate', 'TX', 'R', 'Ted', 'Cruz', '0.943', '', ''],
['Senate', 'UT', 'R', 'Mike', 'Lee', '0.986', '', ''],
['Senate', 'UT', 'R', 'Orrin', 'Hatch', '0.388', '', ''],
['Senate', 'VA', 'D', 'Tim', 'Kaine', '-0.26', '', ''],
['Senate', 'VA', 'D', 'Mark', 'Warner', '-0.222', '', ''],
['Senate', 'VT', 'D', 'Bernie', 'Sanders', '-0.523', '', ''],
['Senate', 'VT', 'D', 'Patrick', 'Leahy', '-0.386', '', ''],
['Senate', 'WA', 'D', 'Maria', 'Cantwell', '-0.301', '', ''],
['Senate', 'WA', 'D', 'Patty', 'Murray', '-0.357', '', ''],
['Senate', 'WI', 'R', 'Ron', 'Johnson', '0.677', '', ''],
['Senate', 'WI', 'D', 'Tammy', 'Baldwin', '-0.565', '', ''],
['Senate', 'WV', 'D', 'Joe', 'Manchin III', '-0.069', '', 'Manchin'],
['Senate', 'WV', 'D', 'Jay', 'Rockefeller', '-0.334', '', ''],
['Senate', 'WY', 'R', 'Michael', 'Enzi', '0.552', 'Mike', ''],
['Senate', 'WY', 'R', 'John', 'Barrasso', '0.554', '', ''],
['Governor', 'AK', '', 'Bill', 'Walker', '-0.023', '', ''],
['Governor', 'AL', 'R', 'Robert', 'Bentley', '0.733', '', ''],
['Governor', 'AR', 'R', 'Asa', 'Hutchinson', '0.572', '', ''],
['Governor', 'AZ', 'R', 'Doug', 'Ducey', '0.536', '', ''],
['Governor', 'CA', 'D', 'Jerry', 'Brown', '-0.392', '', ''],
['Governor', 'CO', 'D', 'John', 'Hickenlooper', '-0.041', '', ''],
['Governor', 'CT', 'D', 'Dan', 'Malloy', '-0.295', 'Dannel', ''],
['Governor', 'FL', 'R', 'Rick', 'Scott', '0.691', '', ''],
['Governor', 'GA', 'R', 'Nathan', 'Deal', '0.611', '', ''],
['Governor', 'HI', 'D', 'David', 'Ige', '-0.321', '', ''],
['Governor', 'IA', 'R', 'Terry', 'Branstad', '0.511', '', ''],
['Governor', 'ID', 'R', 'Butch', 'Otter', '0.73', '', ''],
['Governor', 'IL', 'R', 'Bruce', 'Rauner', '0.233', '', ''],
['Governor', 'IN', 'R', 'Eric', 'Holcomb', '0.397', '', ''],
['Governor', 'KS', 'R', 'Sam', 'Brownback', '0.446', '', ''],
['Governor', 'KY', 'R', 'Matt', 'Bevin', '0.805', '', ''],
['Governor', 'LA', 'D', 'John Bel', 'Edwards', '-0.229', '', ''],
['Governor', 'MA', 'R', 'Charlie', 'Baker', '0.27', '', ''],
['Governor', 'MD', 'R', 'Larry', 'Hogan', '0.212', '', ''],
['Governor', 'ME', 'R', 'Paul', 'LePage', '0.707', '', ''],
['Governor', 'MI', 'R', 'Rick', 'Snyder', '0.248', '', ''],
['Governor', 'MN', 'D', 'Mark', 'Dayton', '-0.438', '', ''],
['Governor', 'MO', 'R', 'Eric', 'Greitens', '0.381', '', ''],
['Governor', 'MS', 'R', 'Phil', 'Bryant', '0.614', '', ''],
['Governor', 'MT', 'D', 'Steve', 'Bullock', '-0.206', '', ''],
['Governor', 'NC', 'D', 'Roy', 'Cooper', '-0.275', '', ''],
['Governor', 'ND', 'R', 'Doug', 'Burgum', '0.111', '', ''],
['Governor', 'NE', 'R', 'Pete', 'Ricketts', '0.812', '', ''],
['Governor', 'NH', 'R', 'Chris', 'Sununu', '0.491', '', ''],
['Governor', 'NJ', 'R', 'Chris', 'Christie', '0.351', '', ''],
['Governor', 'NM', 'R', 'Susana', 'Martinez', '0.251', '', ''],
['Governor', 'NV', 'R', 'Brian', 'Sandoval', '0.212', '', ''],
['Governor', 'NY', 'D', 'Andrew', 'Cuomo', '-0.308', '', ''],
['Governor', 'OH', 'R', 'John', 'Kasich', '0.313', '', ''],
['Governor', 'OK', 'R', 'Mary', 'Fallin', '0.465', '', ''],
['Governor', 'OR', 'D', 'Kate', 'Brown', '-0.679', '', ''],
['Governor', 'PA', 'D', 'Tom', 'Wolf', '-0.496', '', ''],
['Governor', 'RI', 'D', 'Gina', 'Raimondo', '-0.165', '', ''],
['Governor', 'SD', 'R', 'Dennis', 'Daugaard', '0.406', '', ''],
['Governor', 'TN', 'R', 'Bill', 'Haslam', '0.348', '', ''],
['Governor', 'TX', 'R', 'Greg', 'Abbott', '0.546', '', ''],
['Governor', 'UT', 'R', 'Gary', 'Herbert', '0.322', '', ''],
['Governor', 'VA', 'D', 'Terry', 'McAuliffe', '-0.38', '', ''],
['Governor', 'VT', 'R', 'Phil', 'Scott', '0.156', '', ''],
['Governor', 'WA', 'D', 'Jay', 'Inslee', '-0.331', '', ''],
['Governor', 'WI', 'R', 'Scott', 'Walker', '0.846', '', ''],
['Governor', 'WV', 'D', 'Jim', 'Justice', '0.138', '', ''],
['Governor', 'WY', 'R', 'Matt', 'Mead', '0.702', '', ''],
['House', 'AL', 'R', 'Gary', 'Palmer', '0.903', '', ''],
['House', 'AR', 'R', 'French', 'Hill', '0.303', '', ''],
['House', 'AR', 'R', 'Bruce', 'Westerman', '0.836', '', ''],
['House', 'AZ', 'D', 'Tom', "O'Halleran", '-0.497', '', ''],
['House', 'AZ', 'R', 'Martha', 'McSally', '0.513', '', ''],
['House', 'AZ', 'R', 'Andy', 'Biggs', '0.532', '', ''],
['House', 'AZ', 'D', 'Ruben', 'Gallego', '-0.474', '', ''],
['House', 'CA', 'R', 'Mark', 'DeSaulnier', '-0.399', '', ''],
['House', 'CA', 'D', 'Jimmy', 'Panetta', '-0.359', '', ''],
['House', 'CA', 'D', 'Salud', 'Carbajal', '-0.405', '', ''],
['House', 'CA', 'R', 'Steve', 'Knight', '0.741', '', ''],
['House', 'CA', 'D', 'Pete', 'Aguilar', '-0.351', '', ''],
['House', 'CA', 'D', 'Ted', 'Lieu', '-0.526', '', ''],
['House', 'CA', 'D', 'Norma', 'Torres', '-0.367', '', ''],
['House', 'CA', 'D', 'Nanette', 'Barragan', '-0.435', '', ''],
['House', 'CA', 'R', 'Mimi', 'Walters', '0.806', '', ''],
['House', 'CA', 'D', 'Lou', 'Correa', '-0.259', '', ''],
['House', 'CO', 'R', 'Ken', 'Buck', '0.689', '', ''],
['House', 'FL', 'R', 'Matt', 'Gaetz', '0.931', '', ''],
['House', 'FL', 'R', 'Neal', 'Dunn', '0.838', '', ''],
['House', 'FL', 'R', 'John', 'Rutherford', '0.517', '', ''],
['House', 'FL', 'D', 'Al', 'Lawson', '-0.138', '', ''],
['House', 'FL', 'D', 'Stephanie', 'Murphy', '-0.482', '', ''],
['House', 'FL', 'D', 'Darren', 'Soto', '-0.357', '', ''],
['House', 'FL', 'D', 'Val', 'Demings', '-0.551', '', ''],
['House', 'FL', 'D', 'Charlie', 'Crist', '-0.015', '', ''],
['House', 'FL', 'R', 'Brian', 'Mast', '0.659', '', ''],
['House', 'FL', 'R', 'Francis', 'Rooney', '0.807', '', ''],
['House', 'FL', 'R', 'Carlos', 'Curbelo', '0.608', '', ''],
['House', 'GA', 'R', 'Buddy', 'Carter', '0.679', '', ''],
['House', 'GA', 'R', 'Drew', 'Ferguson', '0.868', '', ''],
['House', 'GA', 'R', 'Jody', 'Hice', '0.882', '', ''],
['House', 'GA', 'R', 'Barry', 'Loudermilk', '0.641', '', ''],
['House', 'GA', 'D', 'Rick', 'Allen', '-0.115', 'Rick W.', ''],
['House', 'IA', 'R', 'Rod', 'Blum', '0.728', '', ''],
['House', 'IA', 'R', 'David', 'Young', '0.56', '', ''],
['House', 'IL', 'D', 'Raja', 'Krishnamoorthi', '-0.21', '', ''],
['House', 'IL', 'R', 'Mike', 'Bost', '0.468', '', ''],
['House', 'IL', 'R', 'Darin', 'LaHood', '0.527', '', ''],
['House', 'IN', 'R', 'Jim', 'Banks', '0.633', '', ''],
['House', 'IN', 'R', 'Trey', 'Hollingsworth', '0.319', '', ''],
['House', 'KS', 'R', 'Roger', 'Marshall', '0.416', '', ''],
['House', 'KY', 'R', 'James', 'Comer', '0.792', '', ''],
['House', 'LA', 'R', 'Clay', 'Higgins', '0.592', '', ''],
['House', 'LA', 'R', 'Mike', 'Johnson', '0.625', '', ''],
['House', 'LA', 'R', 'Ralph', 'Abraham', '0.586', '', ''],
['House', 'LA', 'R', 'Garret', 'Graves', '0.695', '', ''],
['House', 'MA', 'D', 'Seth', 'Moulton', '-0.538', '', ''],
['House', 'MD', 'D', 'Anthony', 'Brown', '-0.172', 'Anthony G.', ''],
['House', 'MD', 'D', 'Jamie', 'Raskin', '-0.513', '', ''],
['House', 'ME', 'R', 'Bruce', 'Poliquin', '0.495', '', ''],
['House', 'MI', 'R', 'Jack', 'Bergman', '0.604', '', ''],
['House', 'MI', 'R', 'John', 'Moolenaar', '0.598', '', ''],
['House', 'MI', 'R', 'Mike', 'Bishop', '0.794', '', ''],
['House', 'MI', 'R', 'Paul', 'Mitchell', '0.513', '', ''],
['House', 'MI', 'R', 'Dave', 'Trott', '0.524', '', ''],
['House', 'MI', 'D', 'Debbie', 'Dingell', '-0.509', '', ''],
['House', 'MI', 'D', 'Brenda', 'Lawrence', '-0.358', '', ''],
['House', 'MN', 'R', 'Jason', 'Lewis', '0.651', '', ''],
['House', 'MN', 'R', 'Tom', 'Emmer', '0.504', '', ''],
['House', 'MS', 'R', 'Trent', 'Kelly', '0.215', '', ''],
['House', 'MT', 'R', 'Ryan', 'Zinke', '0.565', '', ''],
['House', 'NC', 'R', 'Mark', 'Walker', '0.792', '', ''],
['House', 'NC', 'R', 'David', 'Rouzer', '0.754', '', ''],
['House', 'NC', 'R', 'Ted', 'Budd', '0.511', '', ''],
['House', 'NE', 'R', 'Don', 'Bacon', '0.81', '', ''],
['House', 'NH', 'D', 'Ann McLane', 'Kuster', '-0.275', 'Annie', ''],
['House', 'NJ', 'R', 'Tom', 'MacArthur', '0.584', '', ''],
['House', 'NJ', 'D', 'Josh', 'Gottheimer', '-0.389', '', ''],
['House', 'NJ', 'D', 'Bonnie', 'Watson Coleman', '-0.486', '', ''],
['House', 'NV', 'D', 'Jacky', 'Rosen', '-0.318', '', ''],
['House', 'NV', 'D', 'Ruben', 'Kihuen', '-0.652', '', ''],
['House', 'NY', 'R', 'Lee', 'Zeldin', '0.599', '', ''],
['House', 'NY', 'D', 'Tom', 'Suozzi', '-0.258', 'Thomas', ''],
['House', 'NY', 'D', 'Kathleen', 'Rice', '-0.188', '', ''],
['House', 'NY', 'R', 'Dan', 'Donovan', '0.266', '', ''],
['House', 'NY', 'D', 'Adriano', 'Espaillat', '-0.126', '', ''],
['House', 'NY', 'R', 'John', 'Faso', '0.563', '', ''],
['House', 'NY', 'R', 'Elise', 'Stefanik', '0.38', '', ''],
['House', 'NY', 'R', 'Claudia', 'Tenney', '0.574', '', ''],
['House', 'NY', 'D', 'John', 'Katko', '0.484', '', ''],
['House', 'OH', 'R', 'Warren', 'Davidson', '0.567', '', ''],
['House', 'OK', 'R', 'Steve', 'Russell', '0.787', '', ''],
['House', 'PA', 'D', 'Dwight', 'Evans', '-0.385', '', ''],
['House', 'PA', 'R', 'Ryan', 'Costello', '0.267', '', ''],
['House', 'PA', 'R', 'Brian', 'Fitzpatrick', '0.055', '', ''],
['House', 'PA', 'D', 'Brendan', 'Boyle', '-0.366', '', ''],
['House', 'TN', 'R', 'David', 'Kustoff', '0.865', '', ''],
['House', 'TX', 'R', 'John', 'Ratcliffe', '0.757', '', ''],
['House', 'TX', 'D', 'Vicente', 'Gonzalez', '-0.261', '', ''],
['House', 'TX', 'R', 'Jodey', 'Arrington', '0.853', '', ''],
['House', 'TX', 'D', 'Will', 'Hurd', '0.445', '', ''],
['House', 'TX', 'R', 'Brian', 'Babin', '0.923', '', ''],
['House', 'UT', 'R', 'Mia', 'Love', '0.381', '', ''],
['House', 'VA', 'R', 'Scott', 'Taylor', '0.594', '', ''],
['House', 'VA', 'D', 'Donald', 'McEachin', '-0.652', '', ''],
['House', 'VA', 'R', 'Tom', 'Garrett', '0.61', 'Thomas', ''],
['House', 'VA', 'D', 'Don', 'Beyer', '-0.575', '', ''],
['House', 'VA', 'R', 'Barbara', 'Comstock', '0.503', '', ''],
['House', 'WA', 'R', 'Dan', 'Newhouse', '0.614', '', ''],
['House', 'WA', 'D', 'Pramila', 'Jayapal', '-0.564', '', ''],
['House', 'WI', 'R', 'Glenn', 'Grothman', '0.787', '', ''],
['House', 'WI', 'R', 'Mike', 'Gallagher', '0.511', '', ''],
['House', 'WV', 'R', 'Alex', 'Mooney', '0.534', '', ''],
['House', 'WV', 'R', 'Evan', 'Jenkins', '0.304', '', ''],
['President', 'US', 'R', 'Donald', 'Trump', '0.555', '', ''],
['Senate', 'AK', 'R', 'Dan', 'Sullivan', '0.71', '', ''],
['Senate', 'CA', 'D', 'Kamala', 'Harris', '-0.399', '', ''],
['Senate', 'GA', 'R', 'David', 'Perdue', '0.709', '', ''],
['Senate', 'IA', 'R', 'Joni', 'Ernst', '0.956', '', ''],
['Senate', 'LA', 'R', 'John', 'Neely Kennedy', '0.109', '', ''],
['Senate', 'NC', 'R', 'Thom', 'Tillis', '0.877', '', ''],
['Senate', 'NE', 'R', 'Ben', 'Sasse', '0.754', '', ''],
['Senate', 'NH', 'D', 'Maggie', 'Hassan', '-0.164', '', ''],
['Senate', 'NV', 'D', 'Catherine', 'Cortez Masto', '-0.534', '', ''],
['Senate', 'SD', 'R', 'Mike', 'Rounds', '0.627', '', ''],
]


function get_article(full_text){
    /*
    Takes text from article found using .all_text() method.
    Newlines must be replaced with literal "\n" first.

    Returns array of paragraphs representing (hopefully) the text
    in the actual article, without advertisements or links.
    */
    var paragraph_array = full_text.split("\n")
    paragraph_array = paragraph_array.filter(Boolean) // removes empty lines

    var min_paragraph_length = 125
    var max_consec_short_lines = 3
    var first_full_line = -1
    var last_line = -1
    for (i = 0; i < paragraph_array.length; i++){
        if (paragraph_array[i].length > min_paragraph_length){
            if (first_full_line == -1){
                first_full_line = i
                var consec_short_lines = 0 // start counter of non-article lines at 0
            } else {
                consec_short_lines = 0 // reset counter if necessary 
            }
        } else if (first_full_line != -1){
            consec_short_lines += 1
            if (consec_short_lines == max_consec_short_lines){
                last_line = i - max_consec_short_lines
            }
        }
    }
    if (first_full_line == -1){
        return []
    } else if (last_line == -1){
        last_line = paragraph_array.length - 1
    }
    var article_array = paragraph_array.slice(first_full_line, last_line + 1)
    //console.log(article_array)
    return article_array
}

//console.log(get_article(example_text));



function find_names_in_article(article_array){
    /*
    Takes an array of paragraphs in an article.
    Returns a set of politicians found,
        with each politician's full info in an array.

    Example: could return
        Set {[ 'President', 'US', 'R', 'Donald', 'Trump', '0.555', '', '' ]}
    */
    politicians_in_article = new Set();
    
    functioning_names = new Set();


    for (i = 0; i < SCORES.length; i++){
        var first = SCORES[i][3];
        var last = SCORES[i][4];
        var alt_first = SCORES[i][6];
        var alt_last = SCORES[i][7];

        var combos = [[first, last]];
        if (alt_last){
            combos.push([first, alt_last]);
        }
        
        if (alt_first){
            combos.push([alt_first, last]);
            if (alt_last){
                combos.push([alt_first, alt_last]);
            }
        }
        for (j = 0; j < article_array.length; j++){
            var text = article_array[j];
            for (k = 0; k < combos.length; k++){
                if (is_name_in_string(text, combos[k][0] + " " + combos[k][1])){
                    politicians_in_article.add(SCORES[i]);
                    functioning_names.add([combos[k][0], combos[k][1]]);
                }
            }
        }
    };
    // console.log(politicians_in_article);
    let search_names = Array.from(functioning_names);
    return [politicians_in_article, search_names];
    };


function is_name_in_string(paragraph_string, name){
    var pattern = new RegExp(name);
    var is_in_string = pattern.test(paragraph_string);
    return is_in_string;
}




// run as an example
// find_names_in_article(get_article(example_text))

function get_sentences(article_array){
    var rv = []
    for (i = 0; i < article_array.length; i++){
        var sentences_array = article_array[i].match(/[^\.!\?]+[\.!\?]+/g);
        if (sentences_array == null){
            // No ., !, or ? in paragraph
            sentences_array = [article_array[i]];
        }
        for (j = 0; j < sentences_array.length; j++){
            rv.push(sentences_array[j]);
        // }
        }
    }
    return rv;
}; 

// run as an example
// console.log(get_sentences(get_article(example_text)));

function Politician(first, last, alternate){
    this.ref = last;
    this.name = first + " " + last;
    this.altname = alternate;
    this.sentiment = 0;
    this.statements = [];
};




//variable data here refers to the result you would get using the function find_names_in_article
var sentiment_analysis = function(sentences, data){
    var politicians = {};
    var first = 3;
    var last = 4;
    var alt_first = 6;
    var alt_last = 7;
    let names = Array.from(data[0]);

    //Creating a dictionary of all the politicians in the article
    for (var i = 0; i < names.length; i++){
        var alternate_name = names[i][alt_first] + " " + names[i][alt_last];
        politicians[names[i][last]] = new Politician(names[i][first], names[i][last], alternate_name);
    }

    //Now using this dictionary to feed all the sentences related to him
    var person = "";
    var references = data[1];
    // console.log(references);
    // console.log(1);
    for (var j = 0; j < sentences.length; j++){
        for (var s = 0; s < references.length; s++){
            if (is_name_in_string(sentences[j], references[s][0] + " " + references[s][1])){
                person = references[s][1]
            };
        };
        // console.log(person)
        if (person != ""){
            if (is_pronoun_in_string(sentences[j], person)){
                politicians[person].statements.push(sentences[j]);
            };
        };
    };
    
    return politicians
};



var article = get_article(example_text);
var names = find_names_in_article(article);
var sentences = get_sentences(article);
sentiment_analysis(sentences, names)


function is_pronoun_in_string(paragraph_string, last){
    var criteria = "/he|He|She|she|" + last + "/"
    var pattern = new RegExp(criteria);
    var is_in_string = pattern.test(paragraph_string);
    return is_in_string;
};





//sentiment_analysis(sentences, names)



