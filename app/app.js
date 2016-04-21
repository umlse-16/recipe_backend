#!/usr/bin/env node
var SyncApi     = require('sync_backend');
var mongoose = require('mongoose');
var winston  = require('winston');
var opts     = require('commander');
var express  = require('express');
var bodyParser = require('body-parser');
var app = express();


// ALWAYS use this logger instead of console.log
// so everything is logged out to file for debugging purposes
var logger   = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
        level:'debug',
        timestamp:true,
        colorize:true
    }),
    new (winston.transports.File)({
        name:"trace.log",
        filename:'../logs/trace.log',
        level:'debug',
        json:false,
        timestamp:true,
        prettyPrint:true,
        tailable:true
    }),
    new (winston.transports.File)({
        name:"error.log",
        filename:'../logs/error.log',
        level:'warn',
        json:false,
        timestamp:true,
        prettyPrint:true,
        tailable:true
    })
  ]
});
// set all command line options for help and parsing purposes
opts.version('0.1.0')
    .option('-p','--port', 'Rest endpoint port')
    .parse(process.argv);
if(!opts.socketioPort) opts.socketioPort = 9000


// magic happens from here on
app.use(express.static(__dirname + '/public_html'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var sync = new SyncApi({
  logger: logger,
  express: app,
  ns: '/sync', // html namespace of the sync api,
  get: function(id, cb) {
    // db get
    return model;
  },
  create: function(model, cb) { // doesn't have  $id field
    // db create 
    // must return object with $id populated
    // if not populated assumed to have failed
    return model;
  },
  update: function(model, cb) { 
    // better have a $id field or you're having a bad day
    // db update
    // return falsy for failure
    return undefined;
  },
  del: function(id, cb) {
    // db delete 
    return false;
  }
});

app.listen(3000, function() {
    logger.info('express server started');
});
