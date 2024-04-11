import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherCardList from './components/WeatherCardList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <WeatherForm />
      <WeatherCardList />
    </div>
  );
};

export default App;
