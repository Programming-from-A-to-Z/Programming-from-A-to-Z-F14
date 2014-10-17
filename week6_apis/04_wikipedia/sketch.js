// http://en.wikipedia.org/w/api.php

// Define the url for the wikipedia API call

var input;

function setup() {
  noCanvas();
  input = createInput('obama');
  var button = createButton('search');
  button.mousePressed(search);
}

function search() {
  var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
  var query = url + '&search=' + input.value();
  loadJSON(query, gotArticles);
}

function getContent(article) {
  var url = 'http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json';
  return function() {
    article = article.replace(/\s+/,'_');
    console.log(url + '&titles=' + article);
    loadJSON(url + '&titles=' + article, gotContent);
  }
}

function gotContent(data) {
  var page = data.query.pages;
  var id = Object.keys(page)[0];
  var txt = page[id].revisions[0]['*'];//.revisions[0]['*'];
  createP(txt);
}

function gotArticles(data) {
  var articles = data[1];
  console.log(articles);
  for (var i = 0; i < articles.length; i++) {
    var div = createDiv('');
    var link = 'http://en.wikipedia.org/w/index.php?title=' + articles[i];
    // var a = createA(link, articles[i]);
    var a = createA('#', articles[i]);
    a.parent(div);
    a.mousePressed(getContent(articles[i]));
  }
}

