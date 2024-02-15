const express=require('express');
const todosRouter = require('./routes/todos');
const app=express();
app.use(express.json());


app.use('/todos', todosRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Todo API');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

