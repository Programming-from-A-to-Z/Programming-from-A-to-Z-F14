// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Use servi
// npm install servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(8080);

// Create an Twitter object to connect to Twitter API
// npm install twit
var Twit = require('twit');
var T = new Twit({
  consumer_key:         '_', 
  consumer_secret:      '_',
  access_token:         '_',
  access_token_secret:  '_'
});

// This is basically just like 'python -m SimpleHTTPServer'
// We are just serving up a directory of files
serveFiles("public");

// This route searches twitter
route('/tweets/:query', getTweets);

// Callback
function getTweets(request) {
  // Here's the string we are seraching for
  var query = request.params.query;

  // Execute a Twitter API call
  T.get('search/tweets', { q: query, count: 10 }, function(err, data, response) {
    // Get some data
    var tweets = data.statuses;

    // Spit it back out so that p5 can load it!
    request.respond(JSON.stringify(tweets, undefined, 2));
  });  
}

// This is a route for posting a tweet
route('/tweet', postTweet)

function postTweet(request) {
  // What did we ask to tweet?
  var statement = request.params.status;

  // Post that tweet!
  T.post('statuses/update', { status: statement}, function(err, reply) {
    // If there was an error let's respond with that error
    if (err !== null) {
      request.respond(JSON.stringify(err));
    // Otherwise let's respond back that it worked ok!
    } else {
      request.respond(JSON.stringify(reply));
    }
  });

}

// If you don't specify a query let's return an error
route('/tweets', error);

// Sending back an error
function error(request) {
  var error = {
    error: 'you forgot to specify a query'
  };
  request.respond(JSON.stringify(error));
}

start();