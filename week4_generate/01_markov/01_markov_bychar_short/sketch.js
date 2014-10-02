

var lines;
var generator;
var output;

function preload() {
  lines = loadStrings('data/itp.txt');
}

function setup() {
  noCanvas();
  generator = new MarkovGenerator(3, 100);
  for (var i = 0; i < lines.length; i++) {
    generator.feed(lines[i]);
  }
  output = getElement('name');
  var button = getElement('button');
  button.mousePressed(generate);
  noCanvas();
}

function generate() {
  var text = generator.generate();
  output.html(text);
}
