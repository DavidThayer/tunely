// server side javascript


var express = require('express');
var app = express(); // initialize express function ( server running)

var controllers = require('./controllers');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); // point server to use all files in directory (to include css, app.js, others...)

app.get('/', function(req, res) {
  res.sendFile('views/index.html' , {root : __dirname}); // set index.html to be initial page of site
  console.log(__dirname);
  // res.send('Express server running! 🧐 🤓 😛');

});

app.post('/api/albums', controllers.albums.create);

app.post('/', function(req, res) {
  var newAlbum = new db.Todo(req.body);
  newAlbum.save(function(err, savedAlbum) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(savedAlbum);
    }
  })
})

app.listen(3000);
// testing git

//server.js
var controllers = require('./controllers');

app.get('/api', controllers.api.index);

// var albums = require('./')
app.get('/api/albums', controllers.albums.index)
