var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
});

var Genre = module.exports = mongoose.model('genre',schema);

module.exports.getGenre = function(id,fn){
  Genre.findById(id,fn);
}

module.exports.addGenre = function(genre,fn){
  Genre.create(genre,fn);
}

module.exports.updateGenre = function(id,genre,options,fn){
  var query = {_id: id};
  var update = {
    name: genre.name
  };
  Genre.findOneAndUpdate(query, update, options, fn);
}

module.exports.deleteGenre = function(id,fn){
  var query = {_id: id};
  Genre.remove(query,fn);
}
