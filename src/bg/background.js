chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "dom-loaded") {
      var full_text = request.data.all_text.replace(/(\r\n|\n|\r)/gm,"\\n").replace(/"/gm,"'");
      packaged_response = GetBias(full_text)
      

    }

});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if (message.Typewriter == "Handshake") {
    console.log("Popup Queue")
    chrome.runtime.sendMessage({
        type: "reports",
        data: { all_text: document.body.innerText,

              }
        });
    }


	});



// http://stackoverflow.com/questions/8499376/chrome-extension-get-entire-text-content-of-the-current-tab
