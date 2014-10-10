// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

var nodes;

function setup() {
  noCanvas();
  var data = [];
  var labels = [];
  var data = [60000, 60000, 40000, 30000, 20000, 10000];
  var labels = ["Paris", "London", "New York", "Moscow", "Berlin", "Tokyo"];
  //var data = [[60000, 60000, 40000], [30000, 20000, 10000]];
  //var labels = [["Paris", "London", "New York"], ["Moscow", "Berlin", "Tokyo"]];  
  background(0);
  nodes = Treemap.generate(data, windowWidth, windowHeight);
  drawTreemap(nodes, labels, []);
}

// some utility functions 
function isArray(arr) {
  return arr && arr.constructor === Array; 
}

function drawTreemap(boxes, labels, index) {
  var newindex; // the index to the next box to draw
  var label; // label of current box
 
  if(isArray(boxes[0][0])) {
    for(var i=0; i<boxes.length; i++) {
      newindex = index.slice();
      console.log(newindex);
      newindex.push(i);
      drawTreemap(boxes[i],labels, newindex);
    }
  } else {

    for(var i=0; i<boxes.length; i++) {
      newindex = index.slice();
      newindex.push(i);

      // figure out the matching label using the index 
      label = labels;
      for(var j=0; j<newindex.length; j++){
        label = label[newindex[j]];
      }
      var x1=boxes[i][0], y1=boxes[i][1], x2=boxes[i][2], y2=boxes[i][3];

      var div = createDiv(label);
      div.position(x1, y1);
      div.size(x2-x1, y2-y1);
      div.style('background-color','#BBBBBB')
      div.style('outline','#000000 solid 1px')
      div.style('textAlign','CENTER');
      div.style('line-height',(y2-y1)+'px');
    }
  }
}

