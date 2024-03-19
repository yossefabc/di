import React from "react";
import { useState } from "react";

const Book = ()=>{
  const[BooksData,setBooksData]=useState('');

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooksData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
    

    return(
        <div>
            <input type="text" placeholder="Search books" value={BooksData} onChange={(e) => setBooksData(e.target.value)}/>
             <button onClick={handleSearch}>Search</button>
             <select name="sort" id="sort" style={{marginLeft:'20px'}}>
                <option>Newest</option>
                <option>oldest</option>
             </select>

        </div>
    )
}

export default Book;