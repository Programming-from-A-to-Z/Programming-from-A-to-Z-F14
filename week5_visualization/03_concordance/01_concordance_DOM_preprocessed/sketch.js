// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This examples builds a very simple DOM visualization of concordance
// With preprocessed JSON data
var concordance;

function setup() {
  
  // No canvas
  noCanvas();

  // Loading JSON
  loadJSON('data/data.json', process);
}


// A function that returns a function that makes a DIV
// This is something that will make functions for callbacks later
function makeDiv(word, count){
  return function(){
    var div = createDiv(word + ' ');
    div.style('font-size',count+'pt');
    div.style('display','inline');  
  }
}

function process(data) {

  // Let's get all the keys so we can sort
  var keys = [];
  for (var word in data) {
    if (data.hasOwnProperty(word)) {
      keys.push(word);
    }
  }

  // Sort the keys
  keys.sort(function(a,b) {
    return (data[b] - data[a]);
  });

  // Now make the divs
  for (var i = 0; i < keys.length; i++) {
    var word = keys[i];
    var count = data[word];

    // We could just make a DIV but this performs poorly
    // var div = createDiv(keys[i] + ' ');
    // makeDiv(word,count)();

    // Instead we use setTimeout with just one millisecond
    // I have no idea why this is so much faster but it is
    setTimeout(makeDiv(word,count), 1);
  }
}


