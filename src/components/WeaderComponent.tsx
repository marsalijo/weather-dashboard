import React, { useState } from 'react';
import { getWeatherByCity } from '../services/weatherService';

const WeatherComponent: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data');
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
