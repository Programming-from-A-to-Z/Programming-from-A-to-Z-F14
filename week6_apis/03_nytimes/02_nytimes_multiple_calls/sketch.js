// Count term appearance in times per year
// Creative JS
// Daniel Shiffman

// An array of "Year" objects
var years = [];
var w;

var input;

// Make a url that searhces for term appeared in a given year
function makeURL(term,year) {
  var apikey = '&api-key=sample-key';
  var api = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&';
  var query = 'q='+term+'&facet_field=source&begin_date='+year+'0101&end_date='+year+'1231&facet_filter=true';
  var url = api+query+apikey;
  return url;
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight-100);
  canvas.position(0,0);
  
  var start = 1950;
  var end = 2014;
  var total = end - start;

  w = width/total;

  // Make year objects
  for (var i = 0; i < total; i++) {
    var div = createDiv(year);
    div.position(i*w, height + 20);
    div.style('font-size', '16pt');
    div.hide();
    var year = start + i;
    years.push(new Year(i*w, year, div));
  }

  input = createInput('computer');
  input.position(10,20);
  var button = createButton('search');
  button.mousePressed(searchIt);
  button.position(10,60);
}

function searchIt() {
  // We will count through the array each time this function is called
  var count = 0;
  var grab = function() {
    years[count].loadData(input.value());
    count++;
  };

  for (var i = 0; i < years.length; i++) {
    years[i].total = 0;
    // A little delay between each call so that we don't overload the API
    setTimeout(grab, i*100);
  }
}


function draw() {
  clear();

  // Width of each bar
  for (var i = 0; i < years.length; i++) {
    years[i].display();
    years[i].hover(mouseX, mouseY);
  }

}

// A new year object
function Year(x, y, d) {
  this.year = y;
  this.total = 0;
  this.xpos = x;
  this.div = d;

  this.hovering = false;

  this.display = function() {
    fill(51);
    if (this.hovering) {
      fill(127, 127, 255);  
    }
    stroke(0);
    var h = map(this.total, 0, 1000, 0, 50);
    rect(x, height - h, w-2, h);
  }  

  this.hover = function(x,y) {
    if (x > this.xpos && x < this.xpos + w) {
      this.div.show();
      this.hovering = true;
    } else {
      this.div.hide();
      this.hovering = false;
    }
  }

  //a function to load the value
  this.loadData = function(term) {
    // Have to keep track of the context
    var self = this;
    // This will be the callback, store the value returned in total
    var loaded = function(data) {
      if (!data.response.facets.source.terms[0]) {
        self.total = 0;
      } else {
        self.total = data.response.facets.source.terms[0].count;
      }
    };
    // Load the data!
    loadJSON(makeURL(term, this.year), loaded);
  };

}


