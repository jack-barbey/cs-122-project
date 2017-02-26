// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var full_text = request.data.all_text.replace(/(\r\n|\n|\r)/gm,"\\n").replace(/"/gm,"'");
    console.log(full_text);


});

function get_text() {
  return full_text
};


// http://stackoverflow.com/questions/8499376/chrome-extension-get-entire-text-content-of-the-current-tab
