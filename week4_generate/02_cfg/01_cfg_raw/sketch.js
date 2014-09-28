var cfree;

function setup() {
  cfree = new ContextFree();
  cfree.add_rule('S', ['NP', 'VP']);
  cfree.add_rule('NP', ['the', 'N']);
  cfree.add_rule('N', ['cat']);
  cfree.add_rule('N', ['dog']);
  cfree.add_rule('N', ['weinermobile']);
  cfree.add_rule('N', ['duchess']);
  cfree.add_rule('VP', ['V', 'the', 'N']);
  cfree.add_rule('V', ['sees']);
  cfree.add_rule('V', ['chases']);
  cfree.add_rule('V', ['lusts after']);
  cfree.add_rule('V', ['blames']);

  noCanvas();
  var button = createButton('generate');
  button.mousePressed(generate);
}

function generate() {
  var expansion = cfree.get_expansion('S');
  createDiv(expansion);
}


