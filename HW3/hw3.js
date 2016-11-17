
//Mongo and react homework thing
//Created by Kyle Harkema for Homework3 CS 336 at Calvin College
//11-16-16

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var MongoClient = require('mongodb').MongoClient;
var db;


app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

MongoClient.connect('mongodb://cs336:bjarne@ds053216.mlab.com:53216/cs336', function (err, dbConnection) {
  if (err) throw err;
  db = dbConnection;
});



app.use(express.static('public'));

// host on port 3000
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.get('/api/people', function(req, res) {
     
     db.collection("homework3").find({}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

app.post('/api/people', function(req, res) {
     console.log("posted")
     var person = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          personID: req.body.personID,
          startDate: req.body.startDate
          }
              
     db.collection("homework3").insert(person, function(err, result){
          if (err) throw err;
     });
});

app.get('/people/', function(req, res) {
     db.collection("homework3").find({}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
     });
});

app.get('/people/:id', function(req, res) {
	var id = req.params.id;
     db.collection("homework3").find({personID: id}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
     });
});

app.delete('/person/:id', function(req, res) {
  var id = req.params.id;
  db.collection("homework3").remove({personID: id});
  res.send('Person ' + req.params.id + " removed");
});

app.get("*", function (req, res) {
	res.sendStatus(404);
});








