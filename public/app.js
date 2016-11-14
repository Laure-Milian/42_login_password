(function() {

var app = {

	endpoint: 'http://localhost:2000',

	init: function() {
		this.listeners();
	},

	listeners: function() {
		$('form').on('submit', this.checkUser.bind(this));
	},

	checkUser: function(event) {
		event.preventDefault();
		var inputLogin = $('#inputPassword').val();
		var inputPassword = $('#inputLogin').val();
		$.post({
			url: this.endpoint + '/checkuser',
			method: 'POST',
			data: {inputLogin: inputLogin, inputPassword: inputPassword, ajax: true}
		})
		.done(this.checkUserDone)
		.fail(this.checkUserFail);
	},

	checkUserDone: function(response) {
		if (response === '/access.html') {
			window.location.href = 'http://localhost:2000' + response;
		} else {
			$('#message').html(response);
		}
	},

	checkUserFail: function() {
		console.log("request fail");
	}
	

}

app.init();

})();