// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// Grammar
var cfree;
// For loading text
var lines;

// Preload the grammar
function preload() {
  lines = loadStrings('data/test.grammar');
}


function setup() {
  cfree = new ContextFree();

  // rules are stored in the given file in the following format:
  // Rule -> a | a b c | b c d
  // ... which will be translated to:
  // cfree.add_rule('Rule', ['a'])
  // cfree.add_rule('Rule', ['a', 'b', 'c'])
  // cfree.add_rule('Rule', ['b', 'c', 'd'])

  // Look through all the rules
  for (var i = 0; i < lines.length; i++) {
    // A regex to get rid of comments
    var line = lines[i].replace(/#.*$/,'').trim(); // Get rid if any comments
    // Match the rule syntax
    var match = /(\w+)\s*->\s*(.*)/.exec(line);
    // If we found a fule
    if (match) {
      // The rule is the first group
      var rule = match[1];
      // The expansions can found in group 2
      var expansions = match[2].split(/\s*\|\s*/);
      // For every expansion
      for (var j = 0; j < expansions.length; j++) {
        // Make the expansion an array and add the rule
        expansion_list = expansions[j].split(/\s+/);
        cfree.add_rule(rule, expansion_list);
      }
    }
  }

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




