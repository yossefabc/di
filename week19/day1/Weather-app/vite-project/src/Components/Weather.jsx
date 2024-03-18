
import React, { useState } from 'react';
import FavoritesPage from './Favorite';

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f79990e7c91519369a42d72b1ba9e3a`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather Page</h1>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
          
        </div>
        
      )}
    </div>
  );
};

export default WeatherPage;

