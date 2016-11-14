var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static('public'));




app.listen(2000);