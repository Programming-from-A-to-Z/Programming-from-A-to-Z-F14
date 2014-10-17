
var searchInput;

var postInput;

var numchars;

function setup() {
  noCanvas();

  searchInput = getElement('searchInput');
  postInput = getElement('postInput');

  var button1 = getElement('searchButton');
  var button2 = getElement('postButton');
  button1.mousePressed(getTweets);
  button2.mousePressed(postTweet);

  numchars = getElement('numchars');
  countChars();
}

function countChars() {
  numchars.html(postInput.value().length);
}

function getTweets() {
  loadJSON(/tweets/ + searchInput.value(), gotTweets);
}

function gotTweets(tweets) {
  for (var i = 0; i < tweets.length; i++) {
    createP(tweets[i].text);
  }
}

function postTweet() {
  loadJSON('/tweet?status=' + encodeURIComponent(postInput.value()), tweeted);
}

function tweeted(data) {
  console.log(data);
  if (data.message) {
    createP('Error! ' + data.message);
  } else if (data.text) {
    createP('Success I tweeted: ' + data.text);
  } else {
    createP('Unknown error! ');
  }
}

