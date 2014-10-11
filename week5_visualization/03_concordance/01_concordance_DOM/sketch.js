// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This examples builds a very simple DOM visualization of concordance
var concordance;

  function setup() {
  
  // No canvas
  noCanvas();

  // Make a concordance object
  // This will hold every word and its count
  concordance = new Concordance();

  // Just loading from a file for simplicity
  var stuff = loadStrings('data/hamlet.txt', process);
}


// A function that returns a function that makes a DIV
// This is something that will make functions for callbacks later
function makeDiv(word, fontsize){
  return function(){
    var div = createDiv(word + ' ');
    div.style('font-size',fontsize+'pt');
    div.style('display','inline');  
  }
}

// Processing the text
function process(data) {

  // Make the text all one thing
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
  concordance.sortByCount();

  // Get all the words
  var keys = concordance.getKeys();

  // Get the count for each word and display
  for (var i = 0; i < keys.length; i++) {
    var count = concordance.getCount(keys[i]);

    // We could just make a DIV but this performs poorly
    // var div = createDiv(keys[i] + ' ');
    
    // Showing how we can use logarithmic scale
    var sz = 10*floor(log(count));
    
    // Or we can arbitrarily scale
    // var sz = count/5;

    // A better solution would be to normalize according to min / max counts

    // Instead we use setTimeout with just one millisecond
    // I have no idea why this is so much faster but it is
    setTimeout(makeDiv(keys[i],sz),1);
  }
}


