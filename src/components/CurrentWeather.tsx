import React from 'react';

interface CurrentWeatherProps {
  weather: {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  } | null;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {
  if (!weather) {
    return <div>No weather data available</div>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
