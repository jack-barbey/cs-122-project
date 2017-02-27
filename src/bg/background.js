chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var full_text = request.data.all_text.replace(/(\r\n|\n|\r)/gm,"\\n").replace(/"/gm,"'");
    console.log(full_text)
    GetBias(full_text)
});




// http://stackoverflow.com/questions/8499376/chrome-extension-get-entire-text-content-of-the-current-tab
