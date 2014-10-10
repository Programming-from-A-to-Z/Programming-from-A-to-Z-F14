// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// An array of lines from a text file
var lines;
var frankenstein;
var counter = 0;
var output;
var typeSound;

var divs = [];

// Preload some seed data
function preload() {
  typeSound = loadSound('data/typewriter-1.mp3');
  lines = loadStrings('data/frankenstein.txt');
}

function setup() {
  // Join everything together in one long string
  // Keep carriage returns so these will show up in the markov generator
  frankenstein = lines.join('\n');

  typeSound.playMode('restart');

  // Make the output element
  output = createDiv('');
  // output.style('background-color','#AAAAAA');
  typeSound.loop();
  noCanvas();
}

function draw() {
  //typed += frankenstein.charAt(counter);
  //output.html(typed)
  //counter++;

  var s = frankenstein.charAt(counter);
  var linebreak = false;

  if (s === ' ') {
    s = '&nbsp;';
  } else if (s === '\n') {
    s = '<br/>';
    linebreak = true;
  }
  
  var div = createDiv(s);
  if (!linebreak) {
    div.style('display','inline-block');
  } else {
    div.style('display','inline');  
  }
  var r = floor(random(4,32));
  div.style('font-size',r+'pt');
  div.parent(output);

  counter++;


}
