// http://developer.nytimes.com



var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&api-key=sample-key'
var input;

function setup() {
  noCanvas();
  input = createInput('obama');
  var button = createButton('search');
  button.mousePressed(search);
}

function search() {
  var query = url + '&q=' + input.value();
  console.log(query);
  loadJSON(query, gotData);
}

function gotData(data) {
  console.log(data);
  docs = data.response.docs;
  for (var i = 0; i < docs.length; i++) {
    createDiv(docs[i].snippet);
  }
}

