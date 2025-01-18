import axios from 'axios';

const API_KEY = '0dc14eac03c7ff40a6e3188dcd6a0644';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

interface WeatherData {
  weather: { description: string }[];
  main: { temp: number };
  name: string;
}

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
