var servi = require('servi');
var app = new servi(true);

port(8080);

serveFiles("public");

var names = useDatabase("namesdb");

route('/save', saveData);

route('/save/:name/:num', saveData);

function saveData(request) {
  // Query String
  var data = {
    name: request.params['name'],
    num: request.params['num']
  };

  names.add(data);
  request.respond('Thanks your data was saved:' + data.name + ',' + data.num);
}

route('/show', showData);

function showData(request) {
  names.getAll(gotData);

  function gotData(data) {
    var renderdata = {allData: data}
    request.render("template.html",renderdata);
  }
}

route('/json', jsonData);

function jsonData(request) {
  names.getAll(gotData);

  function gotData(data) {
    var output = JSON.stringify(data);
    request.respond(output);
  }
}



function saveData(request) {
  // Query String
  var data = {
    name: request.params['name'],
    num: request.params['num']
  };

  names.add(data);
  request.respond('Thanks your data was saved:' + data.name + ',' + data.num);
}

start();