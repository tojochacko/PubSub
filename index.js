function insertQuotes(msg) {
	this.quotedMessage = 'test';
	setTimeout(function() {
			this.quotedMessage = '"'+msg+'"';
	}, 4000);	
}

function showMessage(msg) {
	this.message = msg;
	this.init();
}

showMessage.prototype = {
       init : function() {
		      var temp = new insertQuotes(this.message);	
		      console.log(temp.quotedMessage);
       }
};

new showMessage('tojo chacko');
