
const express = require('express');
const triviaQuestions = require('../triviaQuestions');

const router = express.Router();
let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  res.send(triviaQuestions[currentQuestionIndex].question);
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  if (userAnswer === correctAnswer) {
    score++;
    res.send('Correct!');
  } else {
    res.send('Incorrect!');
  }
  currentQuestionIndex++;
});

router.get('/score', (req, res) => {
  res.send(`Your final score is ${score}/${triviaQuestions.length}`);
});

module.exports = router;
