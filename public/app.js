(function() {

var app = {

	init: function() {
		this.listeners();
	},

	listeners: function() {
		$('form').on('submit', this.checkUser.bind(this));
	},

	checkUser: function(event) {
		event.preventDefault();
		var inputLogin = $('#inputLogin').val();
		var inputPassword = $('#inputPassword').val();
		$.post({
			url: '/checkuser',
			method: 'POST',
			data: {inputLogin: inputLogin, inputPassword: inputPassword, ajax: true}
		})
		.done(this.checkUserDone)
		.fail(this.checkUserFail);
	},

	checkUserDone: function(response) {
		if(response.err) {
			$('#message').html(response.message);
		} else {
			$('html').html(response.message);
		}
	},

	checkUserFail: function() {
		console.log("request fail");
	}
	

}

app.init();

})();