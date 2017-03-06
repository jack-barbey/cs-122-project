
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type: "getReports"}, function(data) {
			var bias_score =  data.bias_score;
			var top_five = data.top_five;
			var fk_score = data.fk_score;
			var fk_text = data.fk_text;

			document.getElementById("bias").innerHTML = bias_score;
			document.getElementById("fk").innerHTML = fk_score;
			document.getElementById("fk_text").innerHTML = "- " + fk_text;

			//Changing the color of the fk circle depending on the score
			var fk_circle = document.getElementById("fk");
			if (fk_score >= 70){fk_circle.style.backgroundColor = "#90FBB7"}
			else if (fk_score >= 50 && fk_score < 70){fk_circle.style.backgroundColor = "#45E17E"}
			else {fk_circle.style.backgroundColor = "#0FCA53"};

			//Changing the color of the bias circle depending on the score
			var bias_circle = document.getElementById("bias");
			if (bias_score == 0){bias_circle.style.backgroundColor = '#B9B9B9';}
			else if (bias_score < 0 && bias_score >= -10) {bias_circle.style.backgroundColor = '#CFCAFE';}
			else if (bias_score < -10 && bias_score >= -20) {bias_circle.style.backgroundColor = '#9A8FFE';}
			else if (bias_score < -20){bias_circle.style.backgroundColor = '#6656F9';}
			else if (bias_score > 0 && bias_score <= 10){bias_circle.style.backgroundColor = '#FEB6B6';}
			else if (bias_score > 10 && bias_score <= 20){bias_circle.style.backgroundColor = '#F67373';}
			else {bias_circle.style.backgroundColor = "#FE3636";};

			//Grab the table
			var table = document.getElementById("Bias_Info");

			for (var k = 0; k < top_five.length; k ++){
				var row = table.insertRow(k + 1);

				var cell_1 = row.insertCell(0);
				var cell_2 = row.insertCell(1);

				cell_1.innerHTML = top_five[k][2];
				cell_2.innerHTML = top_five[k][1];		
			};




		});

		


});
	