var cfree;
var grammar;

function preload() {
  grammar = loadJSON('data/haiku.json');
}


function setup() {
  cfree = new ContextFree();
  for (var rule in grammar) {
    var expansions = grammar[rule].split(/\s*\|\s*/);
    for (var j = 0; j < expansions.length; j++) {
      expansion_list = expansions[j].split(/\s+/);
      cfree.add_rule(rule, expansion_list);
    }
  }
  noCanvas();
  var button = createButton('generate');
  button.mousePressed(generate);
}


function generate() {
  var expansion = cfree.get_expansion('<start>');
  var haiku = expansion.replace(/%/g,'<br/>');
  createP(haiku);
}




