var cfree;
var lines;

function preload() {
  lines = loadStrings('data/test.grammar');
}


function setup() {
  cfree = new ContextFree();
  console.log(lines);

  // rules are stored in the given file in the following format:
  // Rule -> a | a b c | b c d
  // ... which will be translated to:
  // self.add_rule('Rule', ['a'])
  // self.add_rule('Rule', ['a', 'b', 'c'])
  // self.add_rule('Rule', ['b', 'c', 'd'])
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].replace(/#.*$/,'').trim(); // Get rid if any comments
    var match = /(\w+)\s*->\s*(.*)/.exec(line);
    if (match) {
      var rule = match[1];
      var expansions = match[2].split(/\s*\|\s*/);
      for (var j = 0; j < expansions.length; j++) {
        expansion_list = expansions[j].split(/\s+/);
        console.log(rule, expansion_list);
        cfree.add_rule(rule, expansion_list);
      }
    }
  }

  noCanvas();
  var button = createButton('generate');
  button.mousePressed(generate);
}

function generate() {
  var expansion = cfree.get_expansion('S');
  createDiv(expansion);
}




