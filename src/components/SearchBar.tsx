import React, { useState } from 'react';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../store/weatherSlice';

const SearchBar: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.weather.loading);

  const handleSearch = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Get Weather'}
      </button>
    </div>
  );
};

export default SearchBar;
