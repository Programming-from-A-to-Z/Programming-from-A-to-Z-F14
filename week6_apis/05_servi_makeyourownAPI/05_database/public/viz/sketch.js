

var data;

function preload() {
  data = loadJSON('/json')
}

function setup() {
  createCanvas(640,360);
  for (var i = 0; i < data.length; i++) {
    createP(data[i].name + ',' + data[i].num);
  }
}

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