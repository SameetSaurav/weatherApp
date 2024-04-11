import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherData {
  temperature: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  description: string;
  windData: string;
}

interface WeatherState {
  data: Record<string, WeatherData>;
}

const initialState: WeatherState = {
  data: {},
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherSuccess(state, action: PayloadAction<{ city: string; weatherData: WeatherData }>) {
      const { city, weatherData } = action.payload;
      state.data[city] = weatherData;
    },
  },
});

export const { fetchWeatherSuccess } = weatherSlice.actions;
export default weatherSlice.reducer;
