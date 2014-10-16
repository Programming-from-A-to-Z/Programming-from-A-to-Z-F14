var servi = require('servi');
var app = new servi(true);

port(8080);

route('/', requestHandler);

function requestHandler(request) {
    request.respond("Hello World");
}

start();