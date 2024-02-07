const express= require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const posts = [
    {
      id: 1,
      title: 'Introduction to Node.js',
      content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
    },
    {
      id: 2,
      title: 'Getting Started with Express.js',
      content: 'Express.js is a web application framework for Node.js, designed for building web applications and APIs.'
    },
    {
      id: 3,
      title: 'Working with MongoDB',
      content: 'MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.'
    },
    
  ];
  module.exports=posts;

  app.get('/posts', (req, res) => {
    res.json(posts);
  });

  app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json(post);
    }
  });
  
  
  app.post('/posts', (req, res) => {
    
    res.status(201).json({ message: 'New post created' });
  });
  
  
  app.put('/posts/:id', (req, res) => {
    
    res.json({ message: 'Post updated' });
  });
  
 
  app.delete('/posts/:id', (req, res) => {
    
    res.json({ message: 'Post deleted' });
  });
  
  
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });
  
 
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error' });
  });
  
 
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });