var express  = require('express');
var app      = express(); 								// create our app w/ express
var port  	 = process.env.PORT || 8080; 				// set the port

var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var fs = require('fs');
var _ = require('lodash');


app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(methodOverride());

// routes ======================================================================
app.get('/api/list', function(req, res) {
  readJSONFile('./content/content.json', function (err, json) {
    if(err) { throw err; }
    let chunk = _.chunk(json, req.query.limit);
    res.json(chunk[req.query.page]);
  });
});

app.post('/api/event', function(req, res) {
  console.log(req.body)
  readJSONFile('./content/content.json', function (err, json) {
    if(err) { throw err; }
    let date = new Date().toISOString();
    json.push({date, title: req.body.title, description: req.body.description});
    fs.writeFile('./content/content.json', JSON.stringify(json));
    res.json(json);
  })

});

app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);


function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}