chrome.runtime.sendMessage({type:"Handshake"},function(response){
			});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	str = JSON.stringify(message.data);

});



alert("TEST____________________")
