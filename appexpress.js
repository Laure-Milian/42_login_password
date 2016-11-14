var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/checkuser', function(req, res) {

	if (req.body.inputLogin === 'test' && req.body.inputPassword === 'test' && req.body.ajax) {
		fs.readFile('access.html', 'utf8', function(err, data) {
			if (err) {
				return console.log(err);
			}
			res.send({err: false, message: data});
		});
	}
	else if (req.body.inputLogin === 'test' && req.body.inputPassword === 'test') {
		res.redirect('/access.html');
	}
	else if (req.body.inputLogin === 'test') {
		res.send({err: true, message:'Bad login'});
	}
	else if (req.body.inputPassword === 'test') {
		res.send({err: true, message:'Bad password'});
	}
	else {
		res.send({err: true, message:'Bad password & bad login'});
	}
})


app.listen(2000);