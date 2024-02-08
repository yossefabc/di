


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

// Array of emoji objects
const emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '😎', name: 'Smiling Face with Sunglasses' },
    { emoji: '😂', name: 'Face with Tears of Joy' },
    { emoji: '😍', name: 'Smiling Face with Heart-Eyes' },
    
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '😀', name: 'Grinning Face' },
    
];


app.get('/api/emoji', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    const options = [randomEmoji.name];

    // Choose 3 more random distractors
    while (options.length < 4) {
        const distractorIndex = Math.floor(Math.random() * emojis.length);
        const distractor = emojis[distractorIndex].name;
        if (!options.includes(distractor)) {
            options.push(distractor);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    res.json({ emoji: randomEmoji.emoji, options });
});

// Route to handle form submission
app.post('/api/emoji/guess', (req, res) => {
    const { guess, correctAnswer } = req.body;
    const isCorrect = guess === correctAnswer;

    res.json({ isCorrect });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});