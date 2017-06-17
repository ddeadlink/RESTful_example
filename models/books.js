var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  genre: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: String, required: true},
  publisher: {type: String, required: true},
  pages: {type: Number, required: true},
  image_url: {type: String, required: true},
  buy_url: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
});

var Book = module.exports = mongoose.model('book',schema);

module.exports.getBook = function(id,fn){
  Book.findById(id,fn);
}

module.exports.addBook = function(book,fn){
  Book.create(book,fn);
}

// considering to update all fields
module.exports.updateBook = function(id,book,options,fn){
  var query = {_id: id};
  var update = {
    name: book.name,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    pages: book.pages,
    image_url: book.image_url,
    buy_url: book.buy_url
  };
  Book.findOneAndUpdate(query, update, options, fn);
}

module.exports.deleteBook = function(id,fn){
  var query = {_id: id};
  Book.remove(query,fn);
}
