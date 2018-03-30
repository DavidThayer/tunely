var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/tunely");

var albums = require("./album.js")

module.exports = {
  Album: albums
}
