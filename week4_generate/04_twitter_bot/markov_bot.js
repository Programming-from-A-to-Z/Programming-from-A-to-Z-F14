// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thank you to: https://github.com/dariusk/metaphor-a-minute/blob/master/metaphor.js

// npm install twit
var Twit = require('twit');

// If you are deploying this to a web server you might need handle HTTP requests
// This assumes npm install express
// If you're running locally you likely don't need this, or express at all.
// var express = require('express');
// var app = express();

// app.set('port', process.env.PORT || 3000);

// var server = app.listen(app.get('port'), function() {
//   console.log('Express server listening on port ' + server.address().port);
// });

// Here is your twitter app info:
// Developer info is here: https://dev.twitter.com/
// Make an app and get your keys here: https://apps.twitter.com/
var T = new Twit({
  consumer_key:         '_______________', 
  consumer_secret:      '_______________',
  access_token:         '_______________',
  access_token_secret:  '_______________'
});


// Max 140 characters
var generator = new MarkovGenerator(4, 136);

// Load files
var fs = require('fs');

// Feed in some shakespeare files
fs.readFile('midsummer.txt', 'utf8', feedText);
fs.readFile('hamlet.txt', 'utf8', feedText);

// Feed text into the markov generator
function feedText(err, data) {
  var lines = data.split(/\n/);
  for (var i = 0; i < lines.length; i++) {
    if (lines.length > 5) {
      generator.feed(lines[i]);
    }
  }
}

// Grab some tweets
function getTweets() {
  console.log('Going to search for some tweets');
  // Search for tweets with JavaScript
  T.get('search/tweets', { q: 'JavaScript', count: 100 }, function(err, data, response) {
    var tweets = data.statuses;
    console.log('Got ' + tweets.length + ' tweets.');
    for (var i = 0; i < tweets.length; i++) {
      generator.feed(tweets[i].text);
    }
  });  
}

// Post a tweet
function postTweet() {
  console.log('about to post');
  var statement = generator.generate();
  console.log('tweeting: ' + statement);
  T.post('statuses/update', { status: statement}, function(err, reply) {
    // console.log('error: ' + err);
    // console.log('reply: ' + reply);
  });
}

// Get tweets immediately
getTweets();
// Post a first tweet after 5 seconds
setTimeout(postTweet,5000);


// Get more tweets every 150 seconds
setInterval(getTweets, 150000);

// Post a new tweet every 120 seconds
setInterval(postTweet, 120000);

// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// Like python's choice this will return a 
// random element from an array
function choice(somelist) {
  var i = Math.floor(Math.random()*somelist.length);
  return somelist[i];
}

// A MarkovGenerate object
function MarkovGenerator(n, max) {
  // Order (or length) of each ngram
  this.n = Number(n);
  // What is the maximum amount we will generate?
  this.max = max;
  // An object as dictionary
  // each ngram is the key, a list of possible next elements are the values
  this.ngrams = {};
  // A separate array of possible beginnings to generated text
  this.beginnings = [];
}

// A function to feed in text to the markov chain
MarkovGenerator.prototype.feed = function(text, starters) {

  // Discard this line if it's too short
  if (text.length < this.n) {
    return false;
  }

  // Store the first ngram of this line
  var beginning = text.substring(0, this.n);
  if (starters) {
    this.beginnings.push(beginning);
  }
  
  // Now let's go through everything and create the dictionary
  for (var i = 0; i < text.length - this.n; i++) {
    var gram = text.substring(i, i + this.n);
    var next = text.charAt(i + this.n);
    // Is this a new one?
    if (!this.ngrams.hasOwnProperty(gram)) {
      this.ngrams[gram] = [];
    }
    // Add to the list
    this.ngrams[gram].push(next);
  }
}

// Generate a text from the information ngrams
MarkovGenerator.prototype.generate = function() {

  // Get a random  beginning 
  var current = choice(this.beginnings);
  var output = current;
  
  // Generate a new token max number of times
  for (var i = 0; i < this.max; i++) {
    // If this is a valid ngram
    if (this.ngrams.hasOwnProperty(current)) {
      // What are all the possible next tokens
      var possible_next = this.ngrams[current];
      // Pick one randomly
      var next = choice(possible_next);
      // Add to the output
      output += next;
      // Get the last N entries of the output; we'll use this to look up
      // an ngram in the next iteration of the loop
      current = output.substring(output.length-this.n, output.length);
    } else {
      break;
    }
  }
  // Here's what we got!
  return output;
}