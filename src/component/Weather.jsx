import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import './styles.css';

const Weather = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  const getWeather = async (latitude, longitude) => {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: latitude,
        lon: longitude,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(response.data);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  }, []);

  if (location === false) {
    return (
      <div className="weather">
        <span role="img" aria-label="sol">🙁 Você precisa permitir a localização</span>
      </div>
    )
  } else if (weather === false) {
    return (
      <div className="weather-loading">
        <span role="img" aria-label="sol">⏳ Carregando clima...</span>
      </div>
    )
  } else {
    return (
      <div className="weather-infos">
        <span role="img" aria-label="sol">
          ☀️ Clima da suas coordenadas ({weather['weather'][0].description})
        </span>
        <ul>
          <li>Temperatura atual: {weather.main.temp}°</li>
          <li>Temperatura máxima: {weather.main.temp_max}°</li>
          <li>Temperatura miníma: {weather.main.temp_min}°</li>
          <li>Pressão: {weather.main.pressure} hpa</li>
          <li>Umidade: {weather.main.humidity}%</li>
        </ul>
      </div>
    );
  }
};

export default Weather;