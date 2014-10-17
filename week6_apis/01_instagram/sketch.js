// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Instagram requires oAuth, but the old API does not seem to
// https://api.instagram.com/v1/

// To get a search query
var input;

// An array of images
var imgs = [];

function setup() {
  noCanvas();

  // Set up a search query and button for searching
  var form = createDiv('');  
  input = createInput('love');
  input.parent(form);
  var button = createButton('search');
  button.mousePressed(search);
  button.parent(form);
}

// This function will execute the search
function search() {

  // Clear all the previous divs
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].remove();
  }

  // Start over
  imgs = [];

  // Form a URL
  var part1 = 'https://api.instagram.com/v1/tags/';//
  var part2 = '/media/recent?client_id=_______';
  var query = part1 + input.value() + part2;

  // Execute the API query
  loadJSON(query, gotData);
}

// The API query is done
function gotData(data) {
  // Get the image data
  var images = data.data;
  for (var i = 0; i < images.length; i++) {
    // Make an image element for each one
    var img = createImg(images[i].images.thumbnail.url);
    imgs.push(img);
  }
}

