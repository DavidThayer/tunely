// server side javascript


var express = require('express'),
  db = require('./models'); // configure express server
var app = express(); // initialize express function ( server running)

app.use(express.static('public')); // point server to use all files in directory (to include css, app.js, others...)

app.get('/', function(req, res) {
  res.sendFile('views/index.html' , {root : __dirname}); // set index.html to be initial page of site
  console.log(__dirname);
  // res.send('Express server running! 🧐 🤓 😛');

});

app.listen(3000);
// testing git

//server.js
var controllers = require('./controllers');

app.get('/api', controllers.api.index);
