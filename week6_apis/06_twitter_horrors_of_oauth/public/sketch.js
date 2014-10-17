// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// A p5 sketch that searches twitter and tweets

// User input fields
var searchInput;
var postInput;

// How many characters in the tweet?
var numchars;

function setup() {
  noCanvas();
  
  // Get all the HTML elements
  searchInput = getElement('searchInput');
  postInput = getElement('postInput');
  var button1 = getElement('searchButton');
  var button2 = getElement('postButton');
  numchars = getElement('numchars');

  // Assign the callbacks to the functions
  button1.mousePressed(getTweets);
  button2.mousePressed(postTweet);

  // Set the current tweet character count
  countChars();
}

// Update the div that says how many characters are in the tweet
function countChars() {
  numchars.html(postInput.value().length);
}

// Execute an API call, this is our own API!
function getTweets() {
  loadJSON(/tweets/ + searchInput.value(), gotTweets);
}

// We got the tweets
function gotTweets(tweets) {
  // Just stick them in the window
  for (var i = 0; i < tweets.length; i++) {
    createP(tweets[i].text);
  }
}

// Execute an API call to tweet!
function postTweet() {
  // Note the use of encodeURIComponent()
  // We should probably be using this in all the examples from this week
  loadJSON('/tweet?status=' + encodeURIComponent(postInput.value()), tweeted);
}

// We tweeted!
function tweeted(data) {
  // Debugging what happened
  console.log(data);

  // What came back?
  // Just show that in the window
  var p;
  if (data.message) {
    p = createP('Error! ' + data.message);
  } else if (data.text) {
    p = createP('Success I tweeted: ' + data.text);
  } else {
    p = createP('Unknown error! ');
  }
  p.style('background','#F660AB')
  p.style('padding','16px');
}

