// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is from chapter 5
// http://natureofcode.com

// This boundary is div!


// A boundary is a simple rectangle with x,y,width,and height
function Boundary(x_,y_, w_, h_) {

  // Some dimensions
  this.x = x_;
  this.y = y_;
  this.w = w_;
  this.h = h_;

  var fd = new box2d.b2FixtureDef();
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;
 
  var bd = new box2d.b2BodyDef();
 
  bd.type = box2d.b2BodyType.b2_staticBody;
  bd.position = scaleToWorld(this.x, this.y);
  fd.shape = new box2d.b2PolygonShape();
  fd.shape.SetAsBox(scaleToWorld(this.w/2), scaleToWorld(this.h/2));
  this.body = world.CreateBody(bd).CreateFixture(fd);
  
  // Whoa we're making a div now!
  // If it was rotated we'd have to do some transforms
  this.div = createDiv('');
  this.div.position(this.x-this.w/2,this.y-this.h/2);
  this.div.size(this.w,this.h);
  this.div.style('background-color','#999999');
}