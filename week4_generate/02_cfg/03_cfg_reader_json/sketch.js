// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// Grammar
var cfree;
// For loading JSON
var grammar;

// Preload the JSON
function preload() {
  grammar = loadJSON('data/haiku.json');
}


function setup() {
  // Make a new grammar
  cfree = new ContextFree();

  // Look at the JSON object
  for (var rule in grammar) {
    // Get the expansions and split them
    var expansions = grammar[rule].split(/\s*\|\s*/);
    for (var j = 0; j < expansions.length; j++) {
      // Now split up each expansion into its own array
      expansion_list = expansions[j].split(/\s+/);
      // Add the rule
      cfree.add_rule(rule, expansion_list);
    }
  }

  noCanvas();
  // A button to generate a new sentence
  var button = createButton('generate');
  button.mousePressed(generate);
}


function generate() {
  // Make a DIV with the new sentence
  var expansion = cfree.get_expansion('<start>');
  expansion = expansion.replace(/%/g,'<br/>');
  createP(expansion);
}


