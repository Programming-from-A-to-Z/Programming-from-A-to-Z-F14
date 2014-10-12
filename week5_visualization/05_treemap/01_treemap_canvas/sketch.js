// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This example is using the Treemap charting library
// from: https://github.com/imranghory/treemap-squared/

var nodes;

function setup() {
  createCanvas(900,600);

  // Some dummy data
  var data = [];
  var labels = [];
  var data = [60000, 60000, 40000, 30000, 20000, 10000];
  var labels = ["Paris", "London", "New York", "Moscow", "Berlin", "Tokyo"];

  // The data can also be nested
  // var data = [[60000, 60000, 40000], [30000, 20000, 10000]];
  // var labels = [["Paris", "London", "New York"], ["Moscow", "Berlin", "Tokyo"]];  
  background(0);
  
  // Generate the nodes
  nodes = Treemap.generate(data, width, height);

  // Recursive drawing function
  drawTreemap(nodes, labels, []);
}

// some utility functions 
function isArray(arr) {
  return arr && arr.constructor === Array; 
}

function drawTreemap(boxes, labels, index) {
  var newindex; // the index to the next box to draw
  var label; // label of current box
   

  // If it's an array, recursively call this function
  if(isArray(boxes[0][0])) {
    for(var i=0; i<boxes.length; i++) {
      newindex = index.slice();
      newindex.push(i);
      drawTreemap(boxes[i],labels, newindex);
    }
  } else {
    
    // Now we have actual exlements
    for(var i=0; i<boxes.length; i++) {

      // Push the number of this element into an array
      newindex = index.slice();
      newindex.push(i);

      // figure out the matching label using the index 
      label = labels;
      for(var j=0; j<newindex.length; j++){
        label = label[newindex[j]];
      }

      // Get the coordinates of the box
      var x1=boxes[i][0], y1=boxes[i][1], x2=boxes[i][2], y2=boxes[i][3];
      // draw box 
      fill(100);
      stroke(255);
      rect(x1, y1, x2-x1, y2-y1);

      // Draw the box
      fill(255);
      textAlign(CENTER);
      textSize(24);
      text(label,(x1 + x2) / 2, (y1 + y2) / 2);
    }
  }
}

