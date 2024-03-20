import React from "react";


const BookCard= ({ book })=>{
    const { volumeInfo } = book;
    return(
        <div className="book-card">
        <img src={volumeInfo?.imageLinks?.thumbnail} alt="Book cover" />
        <div className="book-details">
          <h3>{volumeInfo.title}</h3>
          <p>Author: {volumeInfo.authors?.join(', ')}</p>
          <p>Published Year: {volumeInfo.publishedDate}</p>
        </div>
      </div>
    )
}
export default BookCard;