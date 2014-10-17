

function setup() {
  createCanvas(300,300);
  colorMode(HSB,360,100,100,100);
}

function draw() {
  background(0);
  //frameRate(1);
  fill(random(360),100,50);
  rect(0,0,100,100);
}
