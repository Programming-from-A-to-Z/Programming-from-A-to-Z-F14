// based on http://www.html5rocks.com/en/tutorials/file/dndfiles/

var files;
var list;
var dropZone;



function process(text) {
  createP(text);
}

function setup() {

  noCanvas();
  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    console.log('Great success! All the File APIs are supported');
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

  // <div id="drop_zone">Drop files here</div>
  dropZone = createDiv('Drop files here');
  dropZone.id('drop_zone');
  dropZone.elt.addEventListener('dragover', handleDragOver, false);
  dropZone.elt.addEventListener('drop', handleFileSelect, false);
  dropZone.elt.addEventListener('dragleave', handleDragLeave, false);

  list = createElement('ol','');
  content = createP('');

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
      var file = createElement('li',f.name + ' ' + f.type + ' ' + f.size + ' bytes');
      file.parent(list);

      var reader = new FileReader();
      reader.readAsText(f);
      reader.onload = function(e) {
        process(e.target.result);
      }
    }
  }


}