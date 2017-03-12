
var full_text = document.body.innerText.replace(/(\r\n|\n|\r)/gm,"\\n").replace(/"/gm,"'");
var packaged_response = GetBias(full_text);

var bias_obj = packaged_response[0];
var fk_obj = packaged_response[1];

var fk_score = fk_obj[0];
var fk_text = fk_obj[1];

var bias_score = bias_obj[0];
var observations = bias_obj[1];
var display_sentences = bias_obj[2];

var leng = display_sentences.length;
for (var i = 0; i < leng; i++) {
  console.log(display_sentences[i][2], display_sentences[i][1])
}

console.log(bias_score);
console.log(fk_score);
console.log(fk_text);


var data = {bias_score: bias_score,
			display_sentences: display_sentences,
			fk_score: fk_score,
			fk_text: fk_text
};

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getReports":
                sendResponse(data);
								console.log("Sent Response")
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
)
