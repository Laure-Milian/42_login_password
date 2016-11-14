(function() {

var app = {

	endpoint: 'http://localhost:2000',

	init: function() {
		app.listeners();
	},

	listeners: function() {
		$('#submitBtn').on('click', this.checkUser.bind(this));
	},

	checkUser: function() {
		var inputLogin = $('#inputLogin').val();
		var inputPassword = $('#inputPassword').val();
		$.post({
			url: this.endpoint + '/checkUser',
			method: 'POST',
			data: {inputLogin: inputLogin, inputPassword: inputPassword}
		})
		.done(this.checkUserDone)
		.fail(this.checkUserFail);
	},

	checkUserDone: function() {
		console.log('ok');
	},

	checkUserFail: function() {
		console.log('nope');
	}
}

app.init();

})();