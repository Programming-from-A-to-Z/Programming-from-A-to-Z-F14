// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is from chapter 5
// http://natureofcode.com

// But now instead of rectangles is text

// Constructor
function Box(x, y, s) {

  // A box is made up of a String
  this.word = s;
  // Get the width and height from the text info
  this.w = textWidth(s);
  this.h = fs;

  // Define a body
  var bd = new box2d.b2BodyDef();
  bd.type = box2d.b2BodyType.b2_dynamicBody;
  bd.position = scaleToWorld(x,y);

  // Define a fixture
  var fd = new box2d.b2FixtureDef();
  // Fixture holds shape
  fd.shape = new box2d.b2PolygonShape();
  fd.shape.SetAsBox(scaleToWorld(this.w/2), scaleToWorld(this.h/2));
  
  // Some physics
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd);

  // Some additional stuff
  this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5,5));
}

// This function removes the particle from the box2d world
Box.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Box.prototype.done = function() {
  // Let's find the screen position of the particle
  var pos = scaleToPixels(this.body.GetPosition());
  // Is it off the bottom of the screen?
  if (pos.y > height+this.w*this.h) {
    this.killBody();
    return true;
  }
  return false;
}

// Drawing the box
Box.prototype.display = function() {
  // Get the body's position
  var pos = scaleToPixels(this.body.GetPosition());
  // Get its angle of rotation
  var a = this.body.GetAngleRadians();
  
  // Draw it!
  rectMode(CENTER);
  push();
  translate(pos.x,pos.y);
  rotate(a);
  // fill(127);
  // stroke(200);
  // strokeWeight(2);
  // rect(0, 0, this.w, this.h);

  // Draw the text instead!
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.word,0, this.h/4);
  pop();
}