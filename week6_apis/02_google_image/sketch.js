// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This comes from Jer Thorp's Data Art examples
// https://github.com/blprnt/dataart

// Some words
var s = 'cat dog frog deer';

// A bunch of divs
var divs = [];

function setup() {
  noCanvas();

  // Split up the words
  var words = s.split(/\W+/);

  // Make each word a link
  for (var i = 0; i < words.length; i++) {
    var a = createA('#',words[i]);
    var div = createDiv('');
    a.parent(div);
    div.style('display');
    divs.push(div); // save the DIV
    // Assign a callback for anytime a word is clicked
    a.mousePressed(getImage(words[i], div));
  }
}

// Again, we're doing this fancy JavaScript thing
// where we make a function on the fly
// We have to do this b/c we need to pass this function to a callback
// and we need an argument
function getImage(word, parentDiv) {

  // Return a function
  return function() {
    // Grab the google image API
    var url = "https://www.googleapis.com/freebase/v1/topic/en/" + word + "?filter=/common/topic/image&limit=1";
    // Load the JSON

    // We need a call back for this too!
    loadJSON(url,function(json) {
      // Get the ID of the image from the JSON
      var id = json.property['/common/topic/image'].values[0].id;
      // Then make an image URL to get the image
      var imgUrl = 'https://usercontent.googleapis.com/freebase/v1/image' + id + '?maxwidth=200&junk=.jpg';
      // Make an HTML image element for the user to see
      var img = createImg(imgUrl);
      img.parent(parentDiv);
    }); 
  }
}