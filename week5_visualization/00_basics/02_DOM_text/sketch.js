// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Basics of drawing text without canvas (DOM)

// A slider and a DIV
var slider;
var div;

// Another DIV which will show us how we get the bounding box of text
var rectangleDiv;

function setup() {
  // No canvas here
  noCanvas();
  
  // Make an empty DIV
  var sliderDiv = createDiv('');
  // Make a slider
  slider = createSlider(4, 256, 64);
  // Put the slider in the div
  slider.parent(sliderDiv);

  // Some text
  var s = 'Strings';
  // Make the DIV
  div = createDiv(s);
  // Set the color
  div.style('font-color','#000000');
  // Set the font (note how this font was loaded in index.html)
  div.style('font-family','Lobster');
  
  // Set the div's position
  div.position(10,200);

  // The div could have a background color
  // div.style('background-color','#AAAAAA');
  
  // But instead I'm going to make a separate DIV
  // to show how I can calculate the bounding box of the text
  rectangleDiv = createDiv('');
  // Set this div's color and position
  rectangleDiv.style('background-color','#AAAAAA');
  rectangleDiv.position(10, 200);
  // Make it a little transparent
  rectangleDiv.style('opacity','0.5');

} 

function draw() {  
  // Size
  var fs = slider.value();
  // Set the size of the font
  div.style('font-size',fs+'pt');


  // Get the width and height of the text
  var w = div.elt.offsetWidth;
  var h = div.elt.offsetHeight;
  // Make the other DIV the same size
  rectangleDiv.size(w,h);

}

