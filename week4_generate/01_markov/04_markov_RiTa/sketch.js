

var lines;
var generator;
var output;

function preload() {
  lines = loadStrings('data/itp.txt');
}

function setup() {
  generator = new RiMarkov(2);
  for (var i = 0; i < lines.length; i++) {
    generator.loadText(lines[i]);
  }
  var button = createButton('Rename ITP.');
  button.mousePressed(generate);
  output = createP('');
  noCanvas();
}

function generate() {
  var names = generator.generateSentences(1);
  console.log(names);
  output.html(names);    
}
