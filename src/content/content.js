


// https://code.tutsplus.com/tutorials/developing-google-chrome-extensions--net-33076
window.addEventListener("load", function() {
		console.log("----------------------------------------Text Sent")

    chrome.runtime.sendMessage({
        type: "dom-loaded",
        data: { all_text: document.body.innerText }
    		});

}, true);

/*
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		var full_text = document.body.innerText
		console.log(full_text)
		//var article = get_article(full_text);
		//console.log(article)
		//var names = find_names_in_article_mod(article);
	  //var sentences = get_sentences(article);
		//var returns = sentiment_analysis(sentences, names)
		//console.log(returns);
		// ----------------------------------------------------------

	}
	}, 10);
});
*/
