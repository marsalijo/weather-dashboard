import React from 'react';
import SearchBar from './SearchBar';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const WeatherDisplay: React.FC = () => {
  const weather = useSelector((state: RootState) => state.weather.weather);
  const error = useSelector((state: RootState) => state.weather.error);
  return (
    <div>
      <h1>Weather</h1>
      <SearchBar />
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

export default WeatherDisplay;
