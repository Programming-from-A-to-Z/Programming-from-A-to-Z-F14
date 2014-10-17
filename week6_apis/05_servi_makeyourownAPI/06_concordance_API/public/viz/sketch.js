// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This examples builds a very simple DOM visualization of concordance
// With data with get from our own API!

function setup() {
  
  // No canvas
  noCanvas();

  // Loading JSON
  loadJSON('/json', process);
}


// A function that returns a function that makes a DIV
// This is something that will make functions for callbacks later
function makeDiv(word, count){
  return function(){
    var div = createDiv(word + ' ');
    div.style('font-size',10*count+'pt');
    div.style('display','inline');  
  }
}

function process(data) {

  // Now make the divs
  for (var i = 0; i < data.length; i++) {
    var word = data[i].word;
    var count = data[i].count;

    // We could just make a DIV but this performs poorly
    // var div = createDiv(keys[i] + ' ');
    // makeDiv(word,count)();

    // Instead we use setTimeout with just one millisecond
    // I have no idea why this is so much faster but it is
    setTimeout(makeDiv(word,count), 1);
  }
}


