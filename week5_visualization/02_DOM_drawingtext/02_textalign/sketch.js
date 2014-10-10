// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com


function setup() {
  noCanvas();
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

