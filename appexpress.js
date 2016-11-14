var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/checkUser', function(req, res) {
	console.log(req.body.inputPassword);
	res.redirect('/access.html');
})


app.listen(2000);