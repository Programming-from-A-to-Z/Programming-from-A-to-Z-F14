// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This examples builds a very simple DOM visualization of concordance
// It reads the text one word a a time and animates the words growing according to their counts

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

  // We are actually going to make the DIVs inside the concordance object
  // This is a bit problematic as its confusing to follow
  // So would be good to refactor 
  concordance.process(text);

}


