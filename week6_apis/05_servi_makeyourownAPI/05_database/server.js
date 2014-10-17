var servi = require('servi');
var app = new servi(true);

port(8080);

serveFiles("public");

var names = useDatabase("namesdb");

route('/save', saveData);

route('/save/:name/:num', saveData);

route('/json', jsonAPI);

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
    var output = '';
    for (i =0; i < data.length; i++) {
      output += data[i].name + ' ' + data[i].num + '<br/>';
    }
    request.respond(output);
  }
}

function jsonAPI(request) {
  names.getAll(gotData);

  function gotData(data) {
    request.respond(JSON.stringify(data));
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