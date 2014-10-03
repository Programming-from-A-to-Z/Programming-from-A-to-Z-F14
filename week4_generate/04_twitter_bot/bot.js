// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thank you to: https://github.com/dariusk/metaphor-a-minute/blob/master/metaphor.js

// npm install twit
var Twit = require('twit');

// If you are deploying this to a web server you might need handle HTTP requests
// This assumes npm install express
// If you're running locally you likely don't need this, or express at all.
// var app = require('express').createServer();
// app.get('/', function(req, res){
//     res.send('Hello world.');
// });
// app.listen(3000);


// Here is your twitter app info:
// Developer info is here: https://dev.twitter.com/
// Make an app and get your keys here: https://apps.twitter.com/
var T = new Twit({
  consumer_key:         '____________', 
  consumer_secret:      '____________',
  access_token:         '____________',
  access_token_secret:  '____________'
});

// A tweet
var statement =   "This is a test tweet.";

// setInterval would tweet every N milliseconds
//setInterval(function() {
  T.post('statuses/update', { status: statement}, function(err, reply) {
    console.log("error: " + err);
    console.log("reply: " + reply);
  });
//},120000);