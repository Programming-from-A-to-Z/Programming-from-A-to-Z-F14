// based on http://www.html5rocks.com/en/tutorials/file/dndfiles/

// When we get text we'll just make a paragraph element with the text
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
  // Make the file input
  var fileInput = createInput();
  // Set attribute to file
  fileInput.attribute('type','file');
  // If we want to allow multiple files
  fileInput.attribute('multiple','');
  // If a file is selected this event will be triggered
  fileInput.elt.addEventListener('change', handleFileSelect, false);
   
  // For the list of files
  var list = createElement('ol','');

  // Function to handle when a file is selected
  function handleFileSelect(evt) {    
    
    // A FileList
    var files = evt.target.files;
    // Show some properties
    for (var i = 0, f; f = files[i]; i++) {
      var file = createElement('li',f.name + ' ' + f.type + ' ' + f.size + ' bytes');
      file.parent(list);
      
      // Read the file and process the result
      var reader = new FileReader();
      reader.readAsText(f);
      reader.onload = function(e) {
        process(e.target.result);
      }
    }
  }
}