import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addCity, addCurrentCity } from '../redux/citySlice';
import { fetchWeatherSuccess } from '../redux/weatherSlice';
import axios from 'axios';

const WeatherForm: React.FC = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.city.cities);
  const [city, setCity] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dda06d522e6b04421c1822b85c9888f1&units=metric`
      );
      const { main, weather, wind } = response.data;
      const temperature: number = main.temp;
      const feels_like: number = main.feels_like;
      const humidity: number = main.humidity;
      const pressure: number = main.pressure;
      const description: string = weather[0].description;
      const windData = wind.speed
      const weatherData = { temperature, feels_like, humidity, pressure, description, windData };
      

      // Check if the city already exists
    if (cities.includes(city)) {
      alert('This city is already added.');
      return;
    }
     // Check if the API response contains valid data
     if (!temperature || !feels_like || !humidity || !pressure || !description || !windData) {
      alert('Invalid city name. Please enter a valid city name.');
      return;
    }

    dispatch(fetchWeatherSuccess({ city, weatherData }));
      dispatch(addCity(city));
      dispatch(addCurrentCity(city));
      setCity('');

  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 p-2 mr-2 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add City
        </button>
      </form>
    </div>
  );
};

export default WeatherForm;
