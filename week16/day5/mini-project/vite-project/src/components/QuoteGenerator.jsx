import React from "react";
import { useState } from "react";
import quotes from "./QuotesDatabase";
import Quote from "./Quotes";

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState({});

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <Quote quote={currentQuote.quote} author={currentQuote.author} />
      <button onClick={getRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default QuoteGenerator;