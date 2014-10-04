// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// Like python's choice this will return a 
// random element from an array
function choice(somelist) {
  var i = floor(random(somelist.length));
  return somelist[i];
}

// A grammar with empty rules object
function ContextFree() {
  this.rules = {};
}

// Rules are stored in the rules object
// the rules themselves are arrays of expansions (which themselves are arrays)
ContextFree.prototype.add_rule = function(rule, expansion) {
  if (this.rules.hasOwnProperty(rule)) {
    this.rules[rule].push(expansion);
  } else {
    this.rules[rule] = [expansion];    
  }
}

// This function recursively calls itself 
// over and over until it reaches a terminal
ContextFree.prototype.expand = function(start, expansion) {
  if (this.rules.hasOwnProperty(start)) {
    // Grab one possible expansion
    var possible_expansions = this.rules[start];
    var random_expansion = choice(possible_expansions);
    
    // call this method again with the current element of the expansion
    for (var i = 0; i < random_expansion.length; i++) {
      this.expand(random_expansion[i], expansion);
    }
  // If the rule wasn't found, then it's a terminal
  // add the String to the array
  } else {
    expansion.push(start);
  }
}

// Start an expansion
ContextFree.prototype.get_expansion = function(axiom) {
  // Start with an empty array
  var expansion = [];
  // Call the expand function
  this.expand(axiom, expansion);
  // Send back a String (rather than array)
  return expansion.join(' ');  
}