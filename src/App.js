import React from "react";
import axios from "axios";

import './App.css';

function App() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let city = "Pachuca";
  let units = "metric";
  let apiKey = "a899961427dc9d3ac320aeea78474c0d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="App">
      <div className="card">
        <form>
          <input type="text" placeholder=" Type a city..." />
          <input type="submit" value="Search" />
          <br />
          <button>Current location</button>
        </form>

        <ul>
      <li>
        <h2>Mexico City,</h2> <h2>MX</h2>
      </li>
      <li>
        <h4>Last update, Saturday 15:34</h4>
      </li>
      <li>
        <h5>Scattered Clouds</h5>
      </li>
    </ul>
        
        <div className="temperatureSet">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="Cloudy"
      />
      <span className="degrees" id="temperature">
        24
      </span>
      <small className="typeDegrees">
        <a href="#">°C</a> | <a href="#"> °F </a>
      </small>
    </div>
        
        <div className="row">
      <div className="col">
        Humidity: <span>23</span>%
      </div>
      <div className="col">
        Wind: <span>3</span> km/h
      </div>
        </div>
        
        <div className="row forecastRow">
      <div className="col-2">
        <img
          className="forecastIcon"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Cloudy"
        />
        <h6 className="hour">16:00</h6>
      </div>

      <div className="col-2">
        <img
          className="forecastIcon"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Cloudy"
        />
        <h6 className="hour">17:00</h6>
      </div>

      <div className="col-2">
        <img
          className="forecastIcon"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Cloudy"
        />
        <h6 className="hour">18:00</h6>
      </div>

      <div className="col-2">
        <img
          className="forecastIcon"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Cloudy"
        />
        <h6 className="hour">19:00</h6>
      </div>

      <div className="col-2">
        <img
          className="forecastIcon"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Cloudy"
        />
        <h6 className="hour">20:00</h6>
      </div>

      <div className="col-2">
        <img
          className="forecastIcon"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Cloudy"
        />
        <h6 className="hour">21:00</h6>
      </div>
        </div>

        <footer>
          <small className="credits">
            <a href="https://github.com/cafrmen/WeatherApp" target="_blank"
              >Open source </a
            >
            by Caf. Hosted at
            <a
              href="https://xenodochial-fermi-222350.netlify.app"
              target="_blank"
              > Netlify.</a
            >
          </small>
        </footer>
        
      </div>
    </div>
  );
}

export default App;
