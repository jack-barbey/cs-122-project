
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type: "getReports"}, function(data) {
			var bias_score =  data.bias_score;
			var top_five = data.top_five;
			var fk_score = data.fk_score;
			var fk_text = data.fk_text;

			var fk_circle = document.getElementById("fk");
			var bias_circle = document.getElementById("bias");

			bias_circle.innerHTML = bias_score;
			fk_circle.innerHTML = fk_score;
			document.getElementById("fk_text").innerHTML = "- " + fk_text;

			// Changing the color of the fk circle depending on the partisanship score
			if (fk_score >= 70) {fk_circle.style.backgroundColor = "#90FBB7"}
			else if (fk_score >= 50 && fk_score < 70) {fk_circle.style.backgroundColor = "#45E17E"}
			else {fk_circle.style.backgroundColor = "#0FCA53"};

			// Changing the color of the bias circle depending on the readability score
			if (bias_score == 0) {bias_circle.style.backgroundColor = '#B9B9B9';}
			else if (bias_score < 0 && bias_score >= -10) {bias_circle.style.backgroundColor = '#CFCAFE';}
			else if (bias_score < -10 && bias_score >= -20) {bias_circle.style.backgroundColor = '#9A8FFE';}
			else if (bias_score < -20) {bias_circle.style.backgroundColor = '#6656F9';}
			else if (bias_score > 0 && bias_score <= 10) {bias_circle.style.backgroundColor = '#FEB6B6';}
			else if (bias_score > 10 && bias_score <= 20) {bias_circle.style.backgroundColor = '#F67373';}
			else {bias_circle.style.backgroundColor = "#FE3636";};

			// Grab the table
			var table = document.getElementById("Bias_Info");

			// Inputting scores and sentences that have been analyzed to calculate the partisanship score
			for (var k = 0; k < top_five.length; k ++){
				politician = top_five[k][0];
				dw_nom = politician.score;
				pol_name = politician.last;
				sentence_score = top_five[k][2];
				sentence = top_five[k][1];

				// Bolds the name of the politician in question
				sentence = sentence.replace(new RegExp('(\\b)(' + pol_name + ')(\\w*)','ig'), '$1<b>$2$3</b>');

				var row = table.insertRow(k + 1);
				var cell_1 = row.insertCell(0);
				var cell_2 = row.insertCell(1);
				
				// Assigning a new id to the row tag
				row.id = "newid";

				// No sentiment
				if (sentence_score == 0) {cell_1.id = "neutral"; cell_2.id = "neutral";}
				// Conservative, positive sentiment
				else if (dw_nom > 0 && sentence_score > 0) {cell_1.id = "conserv"; cell_2.id = "conserv";}
				// Conservative, neg sentiment
				else if (dw_nom > 0 && sentence_score < 0) {cell_1.id = "liberal"; cell_2.id = "liberal";}
				// Liberal, pos sentiment
				else if (dw_nom < 0 && sentence_score > 0) {cell_1.id = "liberal"; cell_2.id = "liberal";}
				// Liberal, neg sentiment
				else if (dw_nom < 0 && sentence_score < 0) {cell_1.id = "conserv"; cell_2.id = "conserv";};

				cell_1.innerHTML = sentence_score;
				cell_2.innerHTML = sentence;
			};

		});

});
