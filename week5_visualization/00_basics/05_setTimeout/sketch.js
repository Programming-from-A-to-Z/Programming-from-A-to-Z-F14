// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// We could store all the DIVs in an array
var divs = [];


function setup() {
  
  noCanvas();

  for (var i = 0; i < 5000; i++) {
    // Just making all the DIVs
    // This works horribly
    // var div = createDiv(i + ' ');
    // div.style('display','inline');
    
    // Now using setTimeout to trigger the DIVs in sequence
    // We have to pass an argument into makeDiv
    // setTimeout(makeDiv(i),i*10);
  }

  setTimeout(makeDivRecursive(1),10);
  

}

// So the makeDiv() function actually returns a function!
function makeDiv(num) {
  // This function makes the div
  return function() {
    var div = createDiv(num + ' ');
    div.style('display','inline');
  }
}


// This version calls setTimeout again recursively!
function makeDivRecursive(num) {
  return function() {
    var div = createDiv(num + ' ');
    div.style('display','inline');
    
    // Up until 100
    if (num < 10000) {
      num++;
      setTimeout(makeDivRecursive(num),1);
    }
  }
}

