

var tweets;

function preload() {
  tweets = loadJSON('/tweets')
}

function setup() {
  noCanvas();
  for (var i = 0; i < tweets.length; i++) {
    createP(tweets[i].text);
  }
}