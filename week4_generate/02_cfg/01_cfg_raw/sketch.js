// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// A grammar object
var cfree;

function setup() {
  // An empty one
  cfree = new ContextFree();
  // We can add rules manually
  cfree.add_rule('S', ['NP', 'VP']);
  cfree.add_rule('NP', ['the', 'N']);
  cfree.add_rule('N', ['cat']);
  //cfree.add_rule('N', ['dog']);
  // cfree.add_rule('N', ['weinermobile']);
  // cfree.add_rule('N', ['duchess']);
  cfree.add_rule('VP', ['V', 'the', 'N']);
  cfree.add_rule('V', ['sees']);
  // cfree.add_rule('V', ['chases']);
  // cfree.add_rule('V', ['lusts after']);
  // cfree.add_rule('V', ['blames']);

  noCanvas();
  // A button to generate a new sentence
  var button = createButton('generate');
  button.mousePressed(generate);
}

function generate() {
  // Make a DIV with the new sentence
  var expansion = cfree.get_expansion('S');
  createDiv(expansion);
}


