// Mini Project - Random Quote Generator

// Part 1 : Quote Generator

//1.2.3
let quotes= [
    {id:0,author:"Greg anderson",quote:"Focus on the journey not the destination"},
    {id:1,author:"Jodi picoult",quote:"You cant edit a blank page"},
    {id:2,author:"W. E. Hickson",quote:"If at first you don't succeed, try, try again."},
    {id:3,author:"Winston Churchill",quote:"If you are going through hell, keep going"},
    {id:4,author:"Charles-Guillaume Étienne",quote:"If you want something done right, do it yourself"}

]

let previousQuoteIndex = -1;

function getRandomQuote() {
    let section = document.getElementById("quote-container");
    let para = document.getElementById("para");

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousQuoteIndex);

    const randomQuote = quotes[randomIndex];

    // Display the quote in the paragraph
    para.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;

    // Update the previous quote index
    previousQuoteIndex = randomIndex;

    // Clear the section and append the paragraph
    section.innerHTML = "";
    section.appendChild(para);
}

// Get the button element by its ID
let button = document.getElementById("btn");

// Add a click event listener to the button
button.addEventListener("click", getRandomQuote);

// Initial display of a random quote
getRandomQuote();

// Part 2 : Add Buttons

//1.

function addNewQuote() {
    let quoteInput = document.getElementById("quoteInput").value;
    let authorInput = document.getElementById("authorInput").value;

    if (quoteInput && authorInput) {
        let newQuote = {
            id: quotes.length,
            author: authorInput,
            quote: quoteInput
        };

        quotes.push(newQuote);

        // Display the new quote
        getRandomQuote();

        // Clear the form inputs
        document.getElementById("quoteInput").value = "";
        document.getElementById("authorInput").value = "";
    }
}


//3.
function previousQuote() {
    if (filteredQuotes.length > 0) {
        filteredIndex = (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        displayFilteredQuote();
    }
}

function nextQuote() {
    if (filteredQuotes.length > 0) {
        filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
        displayFilteredQuote();
    }
}