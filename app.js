var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var http = require('http');
var config = require('./config/config');
var root = __dirname;
var app = express();
var server = null;

// Configuration
require('./config/db')(config);

var modelsPath = __dirname + '/server/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});


require('./config/express')(app, config);
require('./config/routes')(app);

var server = http.createServer(app);
server.listen(config.port, config.host);
console.log('App started on port ' + config.port);
