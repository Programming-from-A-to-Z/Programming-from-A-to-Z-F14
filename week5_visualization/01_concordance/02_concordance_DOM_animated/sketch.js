// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

var concordance;

function setup() {
  
  // No canvas
  // Though doing something visual with this is a great idea for an assignment
  noCanvas();

  // Make a concordance object
  // This will hold every word and its count
  concordance = new Concordance();

  // Just loading from a file for simplicity
  var stuff = loadStrings('data/hamlet.txt', process);
}

function process(data) {
  var text;

  // Did we get an array from loadStrings()
  // or just some raw text
  if (data instanceof Array) {
    text = data.join(' ');
  } else {
    text = data;
  }
  // Process this data
  concordance.process(text);
  // Sort
  // concordance.sortByCount();
  // // Get all the words
  // var keys = concordance.getKeys();
  // // Get the count for each word and display
  // for (var i = 0; i < keys.length; i++) {
  //   var count = concordance.getCount(keys[i]);
  //   var div = createDiv(keys[i] + ' ');
  //   div.style('font-size',count+'pt');
  //   div.style('display','inline');
  // }
}


