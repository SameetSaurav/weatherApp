// src/components/WeatherCardList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeCity } from '../redux/citySlice';

const WeatherCardList: React.FC = () => {
  const currentCity = useSelector((state: RootState) => state.city.cityCurrent);
  const cities = useSelector((state: RootState) => state.city.cities);
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const dispatch = useDispatch();

  const handleRemoveCity = (city: string) => {
    dispatch(removeCity(city));
  };
  
  return (
    <div>
      
        {currentCity && (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-500 text-white text-center py-2">
            <h2 className="text-xl font-semibold">{currentCity}</h2>
          </div>
          <div className="p-4 ml-4">
            <p className="text-lg">Temperature: <span className="text-xl font-semibold">{weatherData[currentCity]?.temperature || 0}°C</span></p>
            <p className="text-lg">Feels like: <span className="text-xl font-semibold">{weatherData[currentCity]?.feels_like || 0}°C</span></p>
            <p className="text-lg">Humidity: <span className="text-xl font-semibold">{weatherData[currentCity]?.humidity || 0}g/kg</span></p>
            <p className="text-lg">Pressure: <span className="text-xl font-semibold">{weatherData[currentCity]?.pressure || 0}millibars</span></p>
            <p className="text-lg">Mostly: <span className="text-xl font-semibold">{weatherData[currentCity]?.description || ''}</span></p>
            <p className="text-lg">Wind Speed: <span className="text-xl font-semibold">{weatherData[currentCity]?.windData || ''}kmph</span></p>
          </div>
        </div>
        
        )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.length > 1 && cities.map((city) => (
          <div key={city} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-blue-500 text-white text-center py-2 flex">
              <h2 className="text-xl ml-auto font-semibold">{city}</h2>
              <button
                className="text-white hover:text-gray-200 font-semibold ml-auto mr-2 focus:outline-none"
                onClick={() => handleRemoveCity(city)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>

            <div className="p-4 ml-4">
              <p className="text-xl">Temperature: <span className="text-2xl">{weatherData[city]?.temperature || 0}°C</span></p>
              <p className="text-xl">Feels like: <span className="text-2xl">{weatherData[city]?.feels_like || 0}°C</span></p>
              <p className="text-xl">Humidity: <span className="text-2xl">{weatherData[city]?.humidity || 0}g/kg</span></p>
              <p className="text-xl">Pressure: <span className="text-2xl">{weatherData[city]?.pressure || 0}millibars</span></p>
              <p className="text-xl">Mostly: <span className="text-2xl">{weatherData[city]?.description || ''}</span></p>
              <p className="text-xl">Wind Speed: <span className="text-2xl">{weatherData[city]?.windData || ''}kmph</span></p>
            </div>   
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCardList;
