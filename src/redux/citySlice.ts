import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CityState {
  cities: string[];
  cityCurrent: string;
}

const initialState: CityState = {
  cities: [],
  cityCurrent: ''
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCurrentCity(state, action: PayloadAction<string>) {
      state.cityCurrent = (action.payload);
    },
    addCity(state, action: PayloadAction<string>) {
      state.cities.push(action.payload);
    },
    removeCity(state, action: PayloadAction<string>) {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
  },
});

export const { addCurrentCity, addCity, removeCity } = citySlice.actions;
export default citySlice.reducer;
