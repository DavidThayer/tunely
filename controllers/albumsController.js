// controllers/albumsController.js
// controllers/albumsController.js
var db = require('../models');

var albums = [];

// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
  db.Album.find({}, function(err, foundAlbums) {
    res.json(foundAlbums); /// broke here!!!!
    })
};

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
  console.log('create route created');
  var genres = req.body.genres.split(', ');
  req.body.genres = genres;
  db.Album.create(req.body, function(err, foundAlbums) {
    res.json(foundAlbums);



  })
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

// controllers/albumsController.js
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
