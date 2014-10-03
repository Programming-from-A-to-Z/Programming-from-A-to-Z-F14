
// Like python's choice this will return a 
// random element from an array
function choice(somelist) {
  var i = floor(random(somelist.length));
  return somelist[i];
}

function ContextFree() {
  this.rules = {};
}
  // rules are stored in self.rules, a dictionary; the rules themselves are
  // lists of expansions (which themselves are lists)
ContextFree.prototype.add_rule = function(rule, expansion) {
  if (this.rules.hasOwnProperty(rule)) {
    this.rules[rule].push(expansion);
  } else {
    this.rules[rule] = [expansion];    
  }
}

ContextFree.prototype.expand = function(start, expansion) {
  if (this.rules.hasOwnProperty(start)) {
    // grab one possible expansion
    var possible_expansions = this.rules[start];
    var random_expansion = choice(possible_expansions);
    // call this method again with the current element of the expansion
    for (var i = 0; i < random_expansion.length; i++) {
      this.expand(random_expansion[i], expansion);
    }
  // if the rule wasn't found, then it's a terminal: simply append the
  // string to the expansion
  } else {
    expansion.push(start);
  }
}

ContextFree.prototype.get_expansion = function(axiom) {
  var expansion = [];
  this.expand(axiom, expansion);
  return expansion.join(' ');  
}