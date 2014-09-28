

var lines;
var generator;
var output;

function preload() {
  lines = loadStrings('data/itp.txt');
}

function setup() {
  generator = new MarkovGenerator(2, 100);
  for (var i = 0; i < lines.length; i++) {
    generator.feed(lines[i]);
  }
  var button = createButton('Rename ITP.');
  button.mousePressed(generate);
  output = createP('');
  noCanvas();
}

function generate() {
  var text = generator.generate();
  output.html(text);
}
