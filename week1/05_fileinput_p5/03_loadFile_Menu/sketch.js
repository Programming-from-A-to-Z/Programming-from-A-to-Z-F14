// based on http://www.html5rocks.com/en/tutorials/file/dndfiles/

var files;
var list;


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


  //<input type="file" id="files" name="files[]" multiple />
  files = createInput();
  files.attribute('type','file');
  // If we want to allow multiple files
  files.attribute('multiple','');
  files.elt.addEventListener('change', handleFileSelect, false);

  list = createElement('ol','');

  content = createP('');

  function handleFileSelect(evt) {    
    var files = evt.target.files; // FileList object
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