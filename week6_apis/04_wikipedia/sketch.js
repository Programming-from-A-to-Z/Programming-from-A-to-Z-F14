// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Wikipedia API
// Info is here:
// http://www.mediawiki.org/wiki/API:Main_page
// http://en.wikipedia.org/w/api.php

// A query string from user
var input;

function setup() {
  noCanvas();
  // Set up the form
  input = createInput('obama');
  var button = createButton('search');
  button.mousePressed(search);
}

// Execute the search
function search() {
  // Form a URL
  var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
  var query = url + '&search=' + input.value();
  // Make the query
  loadJSON(query, gotArticles);
}

// We got the list of articles
function gotArticles(data) {
  // Look at article list
  var articles = data[1];

  // Make a clickable link for each one
  for (var i = 0; i < articles.length; i++) {
    var div = createDiv('');

    // We could also have this example just link to the articles themselves
    // var link = 'http://en.wikipedia.org/w/index.php?title=' + articles[i];
    // var a = createA(link, articles[i]);

    // But we are doing something fancier and excuting another query!
    var a = createA('#', articles[i]);
    a.parent(div);
    // Another callback
    a.mousePressed(getContent(articles[i]));
  }
}


// A closure function factory
// Execute another API query
function getContent(article) {
  // Form the URL
  var url = 'http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json';
  return function() {
    article = article.replace(/\s+/,'_');
    console.log(url + '&titles=' + article);
    // The callback for this is get content
    loadJSON(url + '&titles=' + article, gotContent);
  }
}

// Here we got some content for specific article
function gotContent(data) {
  var page = data.query.pages;
  // The content is in the page's ID #, but we don't actually know the ID number
  // But it always comes first, this is a goofy way to get it
  var id = Object.keys(page)[0];
  // Look at the actual content
  var txt = page[id].revisions[0]['*'];
  // Show in on the HTML page
  createP(txt);
}


