// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

var s = 'cat dog frog deer';

function setup() {
  noCanvas();
  var words = s.split(/\W+/);
  for (var i = 0; i < words.length; i++) {
    var a = createA('#',words[i]);
    var div = createDiv('&nbsp;');
    div.style('display','inline');
    a.mousePressed(getImage(words[i]));
  }
}


function getImage(word) {
  return function() {
    var url = "https://www.googleapis.com/freebase/v1/topic/en/" + word + "?filter=/common/topic/image&limit=1";
    loadJSON(url,function(json) {
      console.log(json);
      var id = json.property['/common/topic/image'].values[0].id;
      console.log(id);
      var imgUrl = 'https://usercontent.googleapis.com/freebase/v1/image' + id + '?maxwidth=200&junk=.jpg';
      createImg(imgUrl);
    }); 
  }
}