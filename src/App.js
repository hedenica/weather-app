import React, { Fragment, useState, useEffect }  from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  }, []);

  return (
    <Fragment>
      <span role="img" aria-label="sol">☀️ Clima da suas coordenadas </span>
      <hr/>
      <ul>
        <li>Temperatura atual: X</li>
        <li>Temperatura máxima: X</li>
        <li>Temperatura miníma: X</li>
        <li>Pressão: X hpa</li>
        <li>Umidade: X%</li>
      </ul>
    </Fragment>
  );
}

export default App;
