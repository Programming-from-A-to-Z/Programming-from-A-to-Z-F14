
function setup() {
  noCanvas();
  // <div id="drop_zone">Drop files here</div>
  dropZone = createDiv('Drop files here');
  dropZone.id('drop_zone');
  dropZone.elt.addEventListener('dragover', handleDragOver, false);
  dropZone.elt.addEventListener('drop', handleFileSelect, false);
  dropZone.elt.addEventListener('dragleave', handleDragLeave, false);

}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  dropZone.style('background','#AAAAAA');
}

function handleDragLeave(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  dropZone.style('background','');

  var files = evt.dataTransfer.files; // FileList object.

  // files is a FileList of File objects. List some properties.
  for (var i = 0, f; f = files[i]; i++) {
    var info = createP('Parsing: ' + f.name + ' ' + f.type + ' ' + f.size + ' bytes');

    var reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function(e) {
      findLinks(e.target.result);
    }
  }
}

function findLinks(data) {
  // A regex to match href='something' capturing something
  // Make sure we have /g
  var regex = /href\s*=\s*['"](.*?)['"]/gi;

  // Fill this array
  var links = [];
  
  // We have to use exec and loop because of the capturing group
  var match = regex.exec(data);
  while (match != null) {
    links.push(match[1]);
    match = regex.exec(data);
  }

  var list = createElement('ol');
  for (var i = 0; i < links.length; i++) {
    var link = createElement('li','');
    var a = createA(links[i],links[i]);
    a.parent(link);
    link.parent(list);
  }

}

