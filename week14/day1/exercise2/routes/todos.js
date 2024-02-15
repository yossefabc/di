const express=require('express');

const router=express.Router();

const todos = ["to clean the house"];
module.exports = router;

router.get('/', (req, res) => {
    res.json(todos);
  });

  router.post('/', (req, res) => {
    const { task } = req.body;
    todos.push({ id: todos.length + 1, task });
    res.status(201).json({ message: 'Todo created successfully' });
  });
  

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { task } = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index].task = task;
      res.json({ message: 'Todo updated successfully' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  });
  

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      res.json({ message: 'Todo deleted successfully' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  });

  