
const express = require('express');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/quiz', quizRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
