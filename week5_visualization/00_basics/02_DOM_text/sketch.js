

// Basics of drawing text in canvas

var slider;
var div;

var rectangleDiv;

function setup() {
  noCanvas();

  var sliderDiv = createDiv('');
  slider = createSlider(4, 256, 64);
  slider.parent(sliderDiv);

  var s = 'Strings';
  div = createDiv(s);
  div.style('font-color','#000000');
  div.style('font-family','Lobster');
  div.style('-webkit-text-stroke', '1px #FF0000;');
  
  div.position(10,200);
  
  //div.style('display','inline');
  //div.style('background-color','#AAAAAA');
  
  
  rectangleDiv = createDiv('');
  rectangleDiv.style('background-color','#AAAAAA');
  rectangleDiv.position(10, 200);
  rectangleDiv.style('opacity','0.5');

} 

function draw() {
  background(100);


  // You can use any available web font
  // If you want to use a font that isn't available by default add a link to your HTML header
  // For example find a font here: https://www.google.com/fonts#
  // And get its link:
  // <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
  textFont('Lobster');

  // textFont('Georgia');
  
  // Size
  var fs = slider.value();
  div.style('font-size',fs+'pt');


  var w = div.elt.offsetWidth;
  var h = div.elt.offsetHeight;
  rectangleDiv.size(w,h);



}

