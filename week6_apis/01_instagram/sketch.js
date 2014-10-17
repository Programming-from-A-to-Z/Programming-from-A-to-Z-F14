// http://developer.nytimes.com

// https://api.instagram.com/v1/tags/love/media/recent?client_id=95f02ca9026d49dd9b5d9be0c8385c0c

var input;

var imgs = [];

function setup() {
  noCanvas();
  var form = createDiv('');
  
  input = createInput('love');
  input.parent(form);
  var button = createButton('search');
  button.mousePressed(search);
  button.parent(form);
}

function search() {
  // Clear everything
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].remove();
  }
  imgs = [];

  var part1 = 'https://api.instagram.com/v1/tags/';//
  var part2 = '/media/recent?client_id=95f02ca9026d49dd9b5d9be0c8385c0c';

  var query = part1 + input.value() + part2;
  loadJSON(query, gotData);
}

function gotData(data) {
  var images = data.data;
  for (var i = 0; i < images.length; i++) {
    var img = createImg(images[i].images.thumbnail.url);
    imgs.push(img);
  }
}

