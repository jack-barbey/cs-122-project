
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type: "getReports"}, function(data) {
			var bias_score =  data.bias_score;
			var top_five = data.top_five;
			var fk_score = data.fk_score;
			var fk_text = data.fk_text;

			document.getElementById("bias").innerHTML = bias_score;
			document.getElementById("fk").innerHTML = fk_score;
			document.getElementById("fk_text").innerHTML = "- ".concat(fk_text);

			//Changing the color of the fk circle depending on the score
			var fk_circle = document.getElementById("fk");
			if (fk_score >= 70){fk_circle.style.backgroundColor = "#09DC4F"}
			else if (fk_score >= 50 && fk_score < 70){fk_circle.style.backgroundColor = "#FEF600"}
			else {fk_circle.style.backgroundColor = "red"};

			//Changing the color of the bias circle depending on the score
			var bias_circle = document.getElementById("bias");
			if (bias_score == 0){bias_circle.style.backgroundColor = 'white';}
			else if (bias_score < 0 && bias_score >= -10) {bias_circle.style.backgroundColor = '#B5B5FE';}
			else if (bias_score < -10 && bias_score >= -20) {bias_circle.style.backgroundColor = '#7070FE';}
			else if (bias_score < -20){bias_circle.style.backgroundColor = 'blue';}
			else if (bias_score > 0 && bias_score <= 10){bias_circle.style.backgroundColor = '#FAB5B5';}
			else if (bias_score > 10 && bias_score <= 20){bias_circle.style.backgroundColor = '#FB7171';}
			else {bias_circle.style.backgroundColor = "red";};
		});
});
	
