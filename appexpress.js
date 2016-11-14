var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/checkuser', function(req, res) {

	if (req.body.inputLogin === 'test' && req.body.inputPassword === 'test' && req.body.ajax) {
		res.send('/access.html');
	}
	if (req.body.inputLogin === 'test' && req.body.inputPassword === 'test') {
		res.redirect('/access.html');
	}
	else if (req.body.inputLogin === 'test') {
		res.send('Bad login');
	}
	else if (req.body.inputPassword === 'test') {
		res.send('Bad password');
	}
	else {
		res.send('Bad password & bad login');
	}
})


app.listen(2000);