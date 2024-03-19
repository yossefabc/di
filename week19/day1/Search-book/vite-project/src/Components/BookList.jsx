import React from "react";
import React, { useState } from 'react';
const BookList= ()=>{
    const [books, setBooks] = useState([]);
   return(
    <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            <p>{book.volumeInfo.publishedDate}</p>
            {/* Add more book details as needed */}
          </div>
        ))}
      </div>
   )
       
}

export default BookList;