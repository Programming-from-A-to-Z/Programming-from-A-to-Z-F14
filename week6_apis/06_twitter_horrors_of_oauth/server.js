var servi = require('servi');
var app = new servi(true);

var Twit = require('twit');
var T = new Twit({
  consumer_key:         '_', 
  consumer_secret:      '_',
  access_token:         '_',
  access_token_secret:  '_'
});

port(8080);

serveFiles("public");

// var names = useDatabase("tweets");

route('/tweets', getTweets);

function getTweets(request) {
  T.get('search/tweets', { q: 'JavaScript', count: 10 }, function(err, data, response) {
    var tweets = data.statuses;
    console.log('Got ' + tweets.length + ' tweets.');
    request.respond(JSON.stringify(tweets));
  });  
}

start();