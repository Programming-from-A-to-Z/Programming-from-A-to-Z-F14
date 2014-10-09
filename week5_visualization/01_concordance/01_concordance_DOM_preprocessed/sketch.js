// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

var concordance;

var now;
function setup() {
  
  // No canvas
  // Though doing something visual with this is a great idea for an assignment
  noCanvas();

  // Just loading from a file for simplicity
  now =Date.now();
  loadJSON('data/data.json', process);
}

function process(data) {
  var keys = [];
  for (var word in data) {
    if (data.hasOwnProperty(word)) {
      keys.push(word);
    }
  }

  keys.sort(function(a,b) {
    return (data[b] - data[a]);
  });

  for (var i = 0; i < keys.length; i++) {
    var word = keys[i];
    var count = data[word];
    var div = createDiv(word + ' ');
    div.style('font-size',count+'pt');
    div.style('display','inline');  
  }

  console.log(Date.now() - now);
}


