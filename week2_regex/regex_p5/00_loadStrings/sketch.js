

// Variable for array of lines
var lines;
// Variable where we'll join all the text together
var text;

// Anything in preload will finish before setup() is triggered
function preload() {
  lines = loadStrings('files/spam.txt');
}

// Now we can do stuff with the text
function setup() {
  noCanvas();
  // join() joins the elements of an array
  // Here we pass in a line break to retain formatting
  text = lines.join('<br/>');
  createP(text);
}


