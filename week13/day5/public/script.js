document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.getElementById('emoji-container');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');

    
    const fetchRandomEmoji = async () => {
        try {
            const response = await fetch('/api/emoji');
            const { emoji, options } = await response.json();

            emojiContainer.textContent = emoji;
            optionsContainer.innerHTML = '';

            options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-button');
                button.addEventListener('click', () => {
                    submitGuess(option);
                });
                optionsContainer.appendChild(button);
            });
        } catch (error) {
            console.error('Error fetching random emoji:', error);
        }
    };

 
    const submitGuess = async (guess) => {
        try {
            const response = await fetch('/api/emoji/guess', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ guess, correctAnswer: emojiContainer.textContent }),
            });
            const { isCorrect } = await response.json();

            if (isCorrect) {
                feedback.textContent = 'Correct!';
            } else {
                feedback.textContent = 'Incorrect!';
            }

           
            setTimeout(fetchRandomEmoji, 2000);
        } catch (error) {
            console.error('Error submitting guess:', error);
        }
    };

    
    fetchRandomEmoji();
});