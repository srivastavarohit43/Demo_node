'use strict';

require('dotenv').config({silent: true});

const express 		= require('express'),
	 path 			= require('path'),
	 logger 		= require('morgan'),
	 cookieParser 	= require('cookie-parser'),
	 bodyParser 	= require('body-parser'),
	 http 			= require('http'),
	 multer 		= require('multer'),
	 mongoose 		= require('mongoose'),
	 routes			= require(path.resolve('./config/routes')),
	 conf			= require(path.resolve(`./config/env/${process.env.PROJECT_ENV}`)),	 
	 app 			= express(),
	 server 		= http.createServer(app);

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes.user);
require('./dataBase/db')(conf);



server.listen(process.env.port || 3030, function(){
  console.log("Application server started");
});
