var bcrypt = require('bcrypt');

const saltRounds = 10;

var initialPassword = "";

bcrypt.genSalt(saltRounds, function(err, salt) {
	bcrypt.hash(initialPassword, salt, function(err, hash) {
		if (err) {
			return console.log(err);
		} 
	})
})

