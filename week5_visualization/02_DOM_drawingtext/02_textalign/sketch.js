// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProcessing


function setup() {
  noCanvas();

  // Not drawing to canvas but making DIVs

  // Alignment with CSS
  var div1 = createDiv('This text is centered');
  div1.style('font-size','16pt');
  div1.style('font-family','Times');
  div1.style('font-color','#AAAAAA');
  div1.style('textAlign','CENTER');

  var div2 = createDiv('This text is right-aligned!');
  div2.style('font-size','16pt');
  div2.style('font-color','#AAAAAA');
  div2.style('textAlign','RIGHT');

  var div3 = createDiv('This text is left-aligned!');
  div3.style('font-size','16pt');
  div3.style('font-color','#AAAAAA');
  div3.style('textAlign','LEFT');


} 

