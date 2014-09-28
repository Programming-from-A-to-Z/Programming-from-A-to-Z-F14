

var lines;
var generator;
var output;

function preload() {
  lines = loadStrings('data/frankenstein.txt');
}

function setup() {
  var text = lines.join('\n');
  generator = new MarkovGenerator(6, 10000);
  generator.feed(text);
  var button = createButton('Write me a Frankenstein Frankenstein.');
  button.mousePressed(generate);
  output = createP('');

  noCanvas();
}

function draw() {

}

function generate() {
  var text = generator.generate();
  text = text.replace(/\n/g,'<br/><br/>');
  output.html(text);
}
