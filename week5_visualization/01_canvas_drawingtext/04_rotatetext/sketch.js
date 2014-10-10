// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-5: Rotating text 
var message = "this text is spinning";
var theta = 0;

function setup() {
  createCanvas(640, 480);
} 

function draw() {
  background(51);
  // You can use any available web font

  translate(width/2, height/2); // Translate to the center
  rotate(theta);               // Rotate by theta
  textAlign(CENTER);

  // The text is center aligned and displayed at (0,0) after translating and rotating. 
  // See Chapter 14 or a review of translation and rotation.
  textFont('Georgia');
  textSize(48);
  fill(255);
  noStroke();
  text(message, 0, 0); 

  // Increase rotation
  theta += 0.02;

}
