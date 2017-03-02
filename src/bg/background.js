chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "dom-loaded") {
      var full_text = request.data.all_text.replace(/(\r\n|\n|\r)/gm,"\\n").replace(/"/gm,"'");
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
    }

});


/*
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
*/


// http://stackoverflow.com/questions/8499376/chrome-extension-get-entire-text-content-of-the-current-tab
