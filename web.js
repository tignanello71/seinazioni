var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var games = require('./routes/games');
var fixtures = require('./fixtures/games');
var Game = require('./models/Game.js');

var mongoose = require('mongoose');
mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
        fixtures.populateDB(); /* POPOLO IL DB SE VUOTO */
    }
});

app.use(bodyParser());