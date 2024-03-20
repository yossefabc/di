import React from 'react';
import { useState } from 'react';
import './App.css'
import Header from './Components/Header';
import Book from './Components/Book';
import BookList from './Components/BookList';

function App() {

  const [books, setBooks] = useState([]);
  return (
    <>
      <div className="app-container">
      <Header title="Book Search App" />
      <Book onSearch={setBooks} />
      <BookList books={books} />
    </div>
    </>
  )
}

export default App
