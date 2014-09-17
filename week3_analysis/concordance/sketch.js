// based on http://www.html5rocks.com/en/tutorials/file/dndfiles/


function setup() {
  
  noCanvas();
  //setupDropZone();
  var stuff = loadStrings('data/test.txt', process);
}


var wordcounts = {};

function process(data) {
  var text;
  if (data instanceof Array) {
    text = data.join(' ');
  } else {
    text = data;
  }
  
  var words = text.split(/\W+/);
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    if (wordcounts[word] == undefined) {
     wordcounts[word] = 1;
    } else {
     wordcounts[word]++;
    }
  }
  
  var sorted = [];
  for (key in wordcounts) {
    if (wordcounts.hasOwnProperty(key) && key.length > 0) {
      sorted.push({'word': key, 'count': wordcounts[key]});
    }
  }
  sorted.sort(function(a,b) {
    return (b.count - a.count);
  });

  for (var i = 0; i < sorted.length; i++) {
     createP(sorted[i].word + ': ' + sorted[i].count);
  }
}
