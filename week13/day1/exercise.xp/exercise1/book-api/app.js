const express = require('express');
const app = express();

const books=[
    {id:1,title:"Harrypoter",author:"jkroling",publishedyear:1990},
    {id:2,title:"atomic habit",author:"robert",publishedyear:2000},
    {id:3,title:"money talk",author:"kyosaki",publishedyear:2010}
]

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})

app.get('/api/books', (req, res) => {
    res.json(books);
  });

  pp.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  });


  app.post('/api/books', express.json(), (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
  });