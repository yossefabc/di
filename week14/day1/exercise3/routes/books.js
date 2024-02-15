const express=require('express');
const router = express.Router();


const books = [];
router.get('/', (req, res) => {
    res.json(books);
  });


  router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], title, author };
      res.json(books[index]);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  });

  module.exports = router;