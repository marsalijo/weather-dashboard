import React from 'react';

interface Forecast {
  date: string;
  temp: number;
  description: string;
}

interface FiveDayForecastProps {
  forecast: Forecast[];
}

const FiveDayForecast: React.FC<FiveDayForecastProps> = ({ forecast }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div>
        {forecast.map((day, index) => (
          <div key={index}>
            <p>{day.date}</p>
            <p>Temperature: {day.temp}°C</p>
            <p>Weather: {day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
