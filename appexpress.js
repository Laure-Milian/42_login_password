var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var bcrypt = require('bcrypt');

var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

var hashPassword = '$2a$10$o702CZOyvjHJIrCf5mXuceKJFiGx3PoeQ2kx5yQSI5o.tnFtBl4Pe';
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/checkuser', function(req, res) {

	bcrypt.compare(req.body.inputPassword, hashPassword, function(err, auth) {
		if (auth && req.body.inputLogin === 'test' && req.body.ajax) {
			fs.readFile('access.html', 'utf8', function(err, data) {
				if (err) {
					return console.log(err);
				}
				res.send({err: false, message: data});
			});
		} 
/*		//Pour form si probleme avec app.js
		else if (req.body.inputLogin === 'test' && req.body.inputPassword === 'test') {
			res.redirect('/access.html');
		}
		// Fin special form*/
		else if (req.body.inputLogin === 'test') {
			res.send({err: true, message:'Bad password'});
		}
		else if (auth) {
			res.send({err: true, message:'Bad login'});
		}
		else {
			res.send({err: true, message:'Bad password & bad login'});
		}
	});
})


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});