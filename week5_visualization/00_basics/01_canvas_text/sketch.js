// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Basics of drawing text in canvas

var slider;

function setup() {
  // Make a canvas and a slider
  createCanvas(640, 480);
  slider = createSlider(4, 256, 64);
} 

function draw() {
  background(175);

  // You can use any available web font
  // If you want to use a font that isn't available by default add a link to your HTML header
  // For example find a font here: https://www.google.com/fonts#
  // And get its link:
  // <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
  textFont('Lobster');

  // textFont('Georgia');
  
  // Size
  var fs = slider.value();
  textSize(fs);

  // Fill
  fill(0);
  // Outline        
  stroke(255);

  var s = 'Strings';

  // Draw the text at an x/y
  text(s, 10, height/2 + 100);

  // We can dynamically calulate the width of the text (and height)
  // of a textbox using textWidth(), textAscent(), and textDescent()
  noStroke();
  fill(0,50);
  var w = textWidth(s);
  var h = textAscent() - textDescent();
  rect(10, height/2 + 100 - h, w, h);



}

