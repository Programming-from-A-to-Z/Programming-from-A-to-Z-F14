var servi = require('servi');
var app = new servi(true);

port(8080);

serveFiles("public");

route('/thing', doThing);

function doThing(request) {
  // Query String
  var name = request.params['name'];
  request.respond("Thanks for doing your thing, " + name);

  // This is also valid:
  // var name = request.params.name;

  // For a post it would be
  // var name = request.fields['name'];
}

start();