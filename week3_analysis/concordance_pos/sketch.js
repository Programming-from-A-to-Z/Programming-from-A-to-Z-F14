function setup() {
  
  noCanvas();
  //setupDropZone();
  var stuff = loadStrings('data/test.txt', process);
}


var wordcounts = {};
var poscounts = {};

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
    
    var pos = RiTa.getPosTags(word);
    if (poscounts[pos] == undefined) {
      poscounts[pos] = 1;
    } else {
      poscounts[pos]++;
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

  for (key in poscounts) {
    if (poscounts.hasOwnProperty(key)) {
      createP(key + ' ' + poscounts[key]);
    }
  }

}
