
function setup() {
  noCanvas();
  var button = getElement('generate');
  button.mousePressed(generate);
}

function draw() {

}

function generate() {
  var output = getElement('markov');
  var order = getElement('order');
  var byWord = getElement('word');
  var length = getElement('length');
  
  var generator = new MarkovGenerator(order.value(), length.value(), byWord.elt.checked);
  var input = getElement('input');
  
  var lines = input.value().split('\n');
  for (var i = 0; i < lines.length; i++) {
    generator.feed(lines[i]);
  }
  output.html(generator.generate());
}
