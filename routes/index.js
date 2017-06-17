var express = require('express');
var router = express.Router();

var Genre = require('../models/genres');
var Book = require('../models/books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: 'use /api/books or /api/genres' });
});

router.get('/api/genres', function(req, res) {
  Genre.find(function(err, genre){
    if (err) throw err;
    res.json(genre);
  });
});

router.post('/api/genres', function(req, res) {
  var genre = req.body;
  Genre.addGenre(genre,function(err,genre){
    if (err) throw err;
    res.json(genre);
  });
});

router.get('/api/genres/:id', function(req, res) {
  Genre.getGenre(req.params.id,function(err, genre){
    if (err) throw err;
    res.json(genre);
  });
});

router.put('/api/genres/:_id', function(req, res) {
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function(err,genre){
    if (err) throw err;
    res.json(genre);
  });
});

router.delete('/api/genres/:_id', function(req, res) {
  var id = req.params._id;
  Genre.deleteGenre(id, function(err,genre){
    if (err) throw err;
    res.json(genre);
  });
});

router.get('/api/books', function(req, res) {
  Book.find(function(err, book){
    if (err) throw err;
    res.json(book);
  });
});

router.post('/api/books', function(req, res) {
  var book = req.body;
  Book.addBook(book,function(err,book){
    if (err) throw err;
    res.json(book);
  });
});

router.get('/api/books/:id', function(req, res) {
  Book.getBook(req.params.id,function(err, book){
    if (err) throw err;
    res.json(book);
  });
});

router.put('/api/books/:_id', function(req, res) {
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, function(err,book){
    if (err) throw err;
    res.json(book);
  });
});

router.delete('/api/books/:_id', function(req, res) {
  var id = req.params._id;
  Book.deleteBook(id, function(err,book){
    if (err) throw err;
    res.json(book);
  });
});


module.exports = router;
