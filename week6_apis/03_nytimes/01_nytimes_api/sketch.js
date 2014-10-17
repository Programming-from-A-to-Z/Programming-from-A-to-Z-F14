// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// API documentation
// http://developer.nytimes.com
// Weirdly it seems to work with 'sample-key'
// But you should probably get your own

// URL for querying the times
var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&api-key=sample-key'

// User input
var input;

function setup() {
  noCanvas();
  // Get ready to make a query
  input = createInput('obama');
  var button = createButton('search');
  button.mousePressed(search);
}

function search() {
  // Form the URL
  var query = url + '&q=' + input.value();

  // Make the API request
  loadJSON(query, gotData);
}

// Request is completed
function gotData(data) {
  // Go through and show some results
  docs = data.response.docs;
  for (var i = 0; i < docs.length; i++) {
    createDiv(docs[i].snippet);
  }
}

