var Twit = require('twit');

// I deployed to Nodejitsu, which requires an application to respond to HTTP requests
// If you're running locally you don't need this, or express at all.
// var app = require('express').createServer();
// app.get('/', function(req, res){
//     res.send('Hello world.');
// });
// app.listen(3000);

// insert your twitter app info here
var T = new Twit({
  consumer_key:         '____________', 
  consumer_secret:      '____________',
  access_token:         '____________',
  access_token_secret:  '____________'
});

var statement =   "This is a test tweet.";

//setInterval(function() {
  T.post('statuses/update', { status: statement}, function(err, reply) {
    console.log("error: " + err);
    console.log("reply: " + reply);
  });
//},120000);