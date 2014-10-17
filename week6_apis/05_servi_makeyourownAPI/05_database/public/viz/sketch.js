// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Look we are getting data from an API we made!

// Some data
var data;

function preload() {
  // Preload the JSON data
  data = loadJSON('/json')
}

function setup() {
  createCanvas(640,360);

  // Make some paragraphs with the data
  for (var i = 0; i < data.length; i++) {
    createP(data[i].name + ',' + data[i].num);
  }
}

// Do some drawing with the data
function draw() {
  background(51);

  fill(255);
  noStroke();
  textSize(64);
  for (var i = 0; i < data.length; i++) {
    text(data[i].name, 10, 50 + i * 64);
    ellipse(320, 50 + i * 64, data[i].num, data[i].num);
  }
}