// Using a for loop to initialize values.
// Using a for loop to draw.
// Adapted from Getting Started with Processing.

var images = [];
var curImage = 0;

function setup() {

  createCanvas(500, 500);
  imageMode(CENTER);
 
  // Add some more images to the array

  var fish = loadImage("fish.png");

  images.push(fish); 
  
  var burger = loadImage("burger.png");
  images.push(burger); 
  
  images.push(loadImage("chickens.jpg")); 

}

function draw() {
  
  background(120, 204, 50);

  // Draw image
  image(images[curImage], width/2, height/2, images[curImage].width, images[curImage].height);

};


function mousePressed() {

  // Increment curImage
  curImage = curImage + 1;

  // Make sure curImage is still in range, loop around if necessary
  if (curImage == images.length) {
    curImage = 0;
    print("curimage "+curImage);
  }
};
