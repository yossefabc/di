// import React, { useState } from 'react';

// const FavoritesPage = () => {
//   const [favorites, setFavorites] = useState([]);

//   // Function to add a city to favorites
//   const addToFavorites = (city) => {
//     setFavorites([...favorites, city]);
//   };

//   return (
//     <div>
//       <h1>Favorites Page</h1>
//       <ul>
//         {favorites.map((city, index) => (
//           <li key={index}>{city}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoritesPage;


import React, { useState, useEffect } from 'react';

const FavoritesPage = () => {
  
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  const addFavorite = (city) => {
    setFavorites([...favorites, city]);
  };

  
  const removeFavorite = (city) => {
    setFavorites(favorites.filter((favorite) => favorite !== city));
  };

  return (
    <div>
      <h1>Favorite Cities</h1>
      <ul>
        {favorites.map((city) => (
          <li key={city}>
            {city}
            <button onClick={() => removeFavorite(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;

