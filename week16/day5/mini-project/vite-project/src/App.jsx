import React from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <QuoteGenerator />
    </div>
  );
}

export default App;
