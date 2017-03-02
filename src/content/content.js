// https://code.tutsplus.com/tutorials/developing-google-chrome-extensions--net-33076
/*
window.addEventListener("load", function() {
		console.log("----------------------------------------Text Sent")

    chrome.runtime.sendMessage({
        type: "dom-loaded",
        data: { all_text: document.body.innerText }
    		});

}, true);
*/


var full_text = document.body.innerText.replace(/(\r\n|\n|\r)/gm,"\\n").replace(/"/gm,"'");
var packaged_response = GetBias(full_text)

var bias_obj = packaged_response[0]
var fk_obj = packaged_response[1]

var fk_score = fk_obj[0]
var fk_text = fk_obj[1]

var bias_score = bias_obj[0]
var observations = bias_obj[1]
var top_five = bias_obj[2]

var leng = top_five.length;
for (var i = 0; i < leng; i++) {
  console.log(top_five[i][2], top_five[i][1])
}
console.log(bias_score)



chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if (message.type == "Handshake") {
    console.log("Popup Queue")
    chrome.runtime.sendMessage({
        type: "reports",
        data: { bias_score: bias_score,
                top_five: top_five,
                fk_score: fk_score,
                fk_text: fk_text
              }
        });
    }


	});
