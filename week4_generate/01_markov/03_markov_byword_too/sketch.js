
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
  generator.feed(input.value());
  output.html(generator.generate());
}
