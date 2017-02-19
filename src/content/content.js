chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/content.js");
		// ----------------------------------------------------------

	}
	}, 10);
});





// https://code.tutsplus.com/tutorials/developing-google-chrome-extensions--net-33076
window.addEventListener("load", function() {
    chrome.runtime.sendMessage({
        type: "dom-loaded",
        data: { all_text: document.body.innerText }
    		},
				// document.body.outerHTML
				function(response) {console.log(response.farewell)}
			);
}, true);
