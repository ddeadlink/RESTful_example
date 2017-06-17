var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// include models
var Genre = require('../models/genres');
var Book = require('../models/books');

mongoose.connect('mongodb://localhost/bookstore');


var books = [
  new Book({
    name: 'Coders at Work',
    genre: 'programming',
    description: 'Definitely a must read!',
    author: 'Joshua Bloch, Peter Norvig, Donald Knuth, Ken Thomson, and Jamie Zawinski',
    publisher: 'Apress; 1st ed. edition (September 15, 2009)',
    pages: 632,
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51sgFGIjHjL._SX331_BO1,204,203,200_.jpg',
    buy_url: 'https://www.amazon.com/gp/product/1430219483/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1430219483&linkCode=as2&tag=jwoagisofdev-20&linkId=SFRZQRRNWIX5FGFF'
  }),
  new Book({
    name: 'Code Complete',
    genre: 'programming',
    description: 'Definitely a must read!',
    author: 'Steve McConnell',
    publisher: 'Microsoft Press; 2nd edition (June 19, 2004)',
    pages: 962,
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/515iO%2B-PRUL._SX408_BO1,204,203,200_.jpg',
    buy_url: 'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670'
  })
];

var genres = [
  new Genre({
    name: 'fiction'
  }),
  new Genre({
    name: 'programming'
  })
]

// considering there will be no errors
for (var i = 0; i < books.length; i++) {
  books[i].save(function(err,result){
    console.log(result);
  });
};

for (var i = 0; i < genres.length; i++) {
  genres[i].save(function(err,result){
    console.log(result);
  });
};

console.log('data stored successfully');
mongoose.disconnect();
