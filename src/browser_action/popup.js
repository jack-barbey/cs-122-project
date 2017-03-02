chrome.runtime.sendMessage({type:"Handshake"},function(response){
			});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
			var	bias_score =  message.data.bias_score;
			var top_five = message.data.top_five;
			var fk_score = math.round(message.data.fk_score);
			var fk_score2 = "TEXASBREITBART"
			var fk_text = message.data.fk_text;

			console.log("test")
});
