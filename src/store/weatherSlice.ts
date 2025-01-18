// filepath: /Users/lijo/projects/weather-dashboard/src/store/weatherSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherByCity, WeatherData } from '../services/weatherService';

interface WeatherState {
  weather: WeatherData | null;
  error: string | null;
  loading: boolean;
}

const initialState: WeatherState = {
  weather: null,
  error: null,
  loading: false,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const data = await getWeatherByCity(city);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch weather data');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
