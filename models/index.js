var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/tunely");

var albums = require("./album.js")
var songs = require("./song.js")

module.exports = {
  Album: albums,
  Song: songs
}
