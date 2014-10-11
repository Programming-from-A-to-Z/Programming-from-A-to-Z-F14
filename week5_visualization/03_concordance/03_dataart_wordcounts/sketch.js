// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14


// Visualization ported from Jer Thorp's Data Art
// https://github.com/blprnt/dataart

// A corcordance object
var concordance;

// Lines of text
var lines;

var left = 0;

function preload() {
  lines = loadStrings('data/hamlet.txt');

}
  
function setup() {
  
  // Full screen canvas
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);

  // Make a concordance object
  // This will hold every word and its count
  concordance = new Concordance();

  // join together with spaces
  var text = lines.join(' ');
  
  // Process this data
  concordance.process(text);
  
  // Sort
  concordance.sortByCount();
}

function draw() {
  background(0);
  var xOffset = map(mouseX, 0, width, 0, left - width);
  
  push();
  translate(-xOffset, 0);
  renderWords();
  pop();
  
  
}

function renderWords() {
  randomSeed(1);
  var theKeys = concordance.getKeys();
  
  left = 0;
  for (var i = 0; i < 100; i++) {
    var word = theKeys[i];
    var count = concordance.getCount(word);
    var x = i * 50;
    var y = 300;

    var s = sqrt(count) * 5;
    
    fill(255,100);
    textSize(s);
    
    var w = textWidth(word);
    
    text(word, 0, y);
    fill(255);
    textSize(16);
    text(count, 0, y + 20);
    
    //rotate(map(mouseX, 0, width, 0, 1));
    translate(w,0);
    left += w;
  }
}


