
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type: "getReports"}, function(data) {
			var bias_score =  data.bias_score;
			var top_five = data.top_five;
			var fk_score = data.fk_score;
			var fk_text = data.fk_text;

			document.getElementById("bias").innerHTML = bias_score;
			document.getElementById("fk").innerHTML = fk_score;
			document.getElementById("fk_text").innerHTML = "- ".concat(fk_text);
		});
});
	
