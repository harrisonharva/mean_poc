var compression = require('compression');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function(app, config) {
//  app.configure(function () {
    app.use(compression());
    app.set('port', config.port);
    //app.use(express.logger('dev'));
    app.use(morgan('combined'))
    
    //app.use(express.bodyParser());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())
    
    //app.use(express.methodOverride());
    app.use(methodOverride('X-HTTP-Method-Override'))
    
    //app.use('/api', app.router);
    var router = express.Router();
    app.use('/api', router);
    app.use('/', express.static(__dirname + "/../client"));
//  });
};