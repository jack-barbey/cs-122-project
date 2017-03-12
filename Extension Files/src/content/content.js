// Begins by obtaining the full text from the webpage and replacing some special characters
// to make our processing easier
var full_text = document.body.innerText.replace(/(\r\n|\n|\r)/gm,"\\n").replace(/"/gm,"'");

// GetBias is a custom-made module that we created. It represents the sum total of the
// operations in bundled.js. Calling it passes the entire text to the functions in bundled.js
var packaged_response = GetBias(full_text);

// Unpacking the many-layered product of GetBias
var bias_obj = packaged_response[0];
var fk_obj = packaged_response[1];

var fk_score = fk_obj[0];
var fk_text = fk_obj[1];

var bias_score = bias_obj[0];
var observations = bias_obj[1];
var display_sentences = bias_obj[2];

var data = {bias_score: bias_score,
			display_sentences: display_sentences,
			fk_score: fk_score,
			fk_text: fk_text
};

// Listens for a handshake message (type: "getReports") from popup.js that signals that the browser_action
// popup is being displayed. Sends all the unpacked data as a response, in a dictionary form
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getReports":
                sendResponse(data);
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
)
