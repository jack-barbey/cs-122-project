var example_text = "\nElection ResultsNationWorldOur Team\nTrump's Sweden comment raises questions\n\nBy Eric Bradner, CNN\nUpdated 2:24 PM ET, Sun February 19, 2017\n\n\nFlynn: One of the greatest presidencies\n\nJudge rejects request to delay travel ban case\n\nTrump defends ban, Trudeau has opposing view\n\nTrump shakes Japanese PM's hand for 19 seconds\n\nTapper: Trump's tweets a window into his soul\n\nTrump slams 'so-called' judge who halted ban\n\nCNN/ORC poll: Trump approval rating at 44%\n\nTrump's foreign policy sparks confusion\nNow Playing\nTrump's Sweden remark raises questions\n\nPresident Trump starts rally attacking media\n\nCNN anchor to Trump: Jefferson favored media\n\nTrump brings supporter on stage during rally\n\nCongress could force release of Trump's taxes\n\nTrump: I can live with 2 or 1-state solution\n\nTrump White House seeing chaotic first month\n\nWatch Trump ignore several questions on Russia\n\nFlynn: One of the greatest presidencies\n\nJudge rejects request to delay travel ban case\n\nTrump defends ban, Trudeau has opposing view\n\nTrump shakes Japanese PM's hand for 19 seconds\n\nTapper: Trump's tweets a window into his soul\n\nTrump slams 'so-called' judge who halted ban\n\nCNN/ORC poll: Trump approval rating at 44%\n\nTrump's foreign policy sparks confusion\n\nTrump's Sweden remark raises questions\n\nPresident Trump starts rally attacking media\n\nCNN anchor to Trump: Jefferson favored media\n\nTrump brings supporter on stage during rally\n\nCongress could force release of Trump's taxes\n\nTrump: I can live with 2 or 1-state solution\n\nTrump White House seeing chaotic first month\n\nWatch Trump ignore several questions on Russia\nStory highlights\n'We've got to keep our country safe,' he said\nThe White House did not immediately respond to a request for comment Sunday\nWashington (CNN)President Donald Trump's reference to 'what's happening last night in Sweden' during a Saturday rally in Florida raised questions in Sweden and around the internet about what he really meant.\n\nTrump referenced the Scandinavian nation, known for liberally accepting Syrian refugees, during a section of his speech decrying the dangers of open borders.\n'We've got to keep our country safe,' he said. 'You look at what's happening in Germany. You look at what's happening last night in Sweden. Sweden, who would believe this? Sweden. They took in large numbers. They're having problems like they never thought possible. You look at what's happening in Brussels. You look at what's happening all over the world. Take a look at Nice. Take a look at Paris.'\n\nKasich: World leaders 'just not sure' where Trump stands\nTrump appeared to be referring to recent terror attacks in Germany and elsewhere, but no such attack has occurred in Sweden. The White House did not immediately respond Sunday morning to questions about what Trump meant.\nThe official Twitter of the Embassy of Sweden in the US has responded to those asking about what happened Friday night by saying: 'Unclear to us what President Trump was referring to. Have asked US officials for explanation.'\nOthers on Twitter have speculated that Trump, who is a well-chronicled consumer of television news, might have been watching a segment on Fox News host Tucker Carlson's show Friday night.\nCarlson interviewed Ami Horowitz, a filmmaker who has tried to tie Sweden's taking in of asylum seekers to increased violent crimes in the country.\nCarl Bildt, the former Swedish prime minister, questioned the President's statement on Twitter.\n'Sweden? Terror attack? What has he been smoking?' Bildt tweeted. 'Questions abound.'\nTrump's remark is the latest misplaced reference to a terrorist attack or incident by those in his White House. Trump counselor Kellyanne Conway inaccurately referred to a 'Bowling Green massacre' that never took place, and White House press secretary Sean Spicer referred to an attack in Atlanta, later clarifying that he meant to refer to Orlando.\nSections\nElection ResultsNationWorldOur Team\nFollow us\nCNN.com\n© 2017 Cable News Network. Turner Broadcasting System, Inc. All Rights Reserved.\nCNN Sans ™ & © 2016 Cable News Network. Terms of service | Privacy guidelines\n\nOpinion: We need to reality-check ourselves on ICE raids\n\nSupporter: I salute cardboard Trump every day\n"

function get_article(full_text){
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
	}
	else if (last_line == -1){
		last_line = paragraph_array.length - 1
	}
	var article_array = paragraph_array.slice(first_full_line, last_line + 1)
	console.log(article_array)
	return article_array
}
