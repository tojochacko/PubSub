//some other constructor
function insertQuotes(msg) {
	this.quotedMessage = 'test';
	//setTimeout to imitate some long operation
	setTimeout(function() {
			this.quotedMessage = '"'+msg+'"';
			PubSub.publish('msgquoted', {message:this.quotedMessage});
	}, 3000);	
}

//some constructor
function showMessage(msg) {
	this.message = msg;
	this.init();
}

showMessage.prototype = {
       init : function() {
			var temp = new insertQuotes(this.message);	
			PubSub.subscribe('msgquoted', function(name, data) {
					console.log(name);
					console.log(data);
					window.document.write(data.message);
			});
       }
};

