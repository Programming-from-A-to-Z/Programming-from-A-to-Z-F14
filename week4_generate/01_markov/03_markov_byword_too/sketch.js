// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

function setup() {
  noCanvas();
  // Assign the generate() function to the button
  var button = getElement('generate');
  button.mousePressed(generate);
}

function generate() {
  // Get the HTML elements we need
  var output = getElement('markov');
  var order = getElement('order');
  var byWord = getElement('word');
  var length = getElement('length');
  
  // Create a generator with parameters
  var generator = new MarkovGenerator(order.value(), length.value(), byWord.elt.checked);

  // Get the input text
  var input = getElement('input');
  
  // Split it up into line breaks
  var lines = input.value().split('\n');
  // Feed in the lines
  for (var i = 0; i < lines.length; i++) {
    generator.feed(lines[i]);
  }
  // Show the resulting output
  output.html(generator.generate());
}
