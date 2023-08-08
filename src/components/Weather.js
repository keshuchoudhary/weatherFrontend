import React from 'react'
import img from '../assets/bg.png'
import './Weather.css'
import axios from 'axios'
import { useState } from 'react'
import WeatherInfo from './WeatherInfo'

function Weather() {

  const [cityName, setCityName] = useState('');

  const [info, setInfo] = useState(false);

  const [weatherInfo, setWeatherInfo] = useState({city: '',temperature: '', humidity: '', weatherConditions: ''});



  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log("chalra h")

    try {
      const response = await axios.post('http://localhost:5000/', { cityName });
      // console.log('Response:', response.data);
      if(response.data.message=="Invalid City Name!"){
        setInfo(false);
        return;
      }
      const {city, temperature, humidity, weatherConditions} = response.data;
      // console.log(city, temperature, humidity, weatherConditions);
      setWeatherInfo({city, temperature, humidity, weatherConditions});
      setInfo(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  }




  return (
    <div className="container" style={{ backgroundImage: `url(${img})` }}>
      {/* <h2>Weather Conditions :</h2> */}
      <div class="search-box">
          <image src={img}></image>
          <form onSubmit={handleSubmit}>
              <input onChange={handleInputChange} className="cityInput" type="text" name="cityName" value={cityName} id="city" placeholder="Search for a city...." autocomplete="off"></input>
              {/* <button className="btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="auto" viewBox="0 0 24 24" fill="none" stroke="#3c3c3c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button> */}
              <button type="submit">Go</button>
          </form>
      </div>

      {
        info==false && cityName!="" && <p>Please write a valid city name!</p>
      }

      {
        // info && console.log(weatherInfo) && 
        info && <WeatherInfo weatherInfo={weatherInfo}/>
      }
      
{/* 
        <div>
          {
            info && 
            <div>
              <h2>Weather Updates of {weatherInfo.city}</h2>
              <br/>
              <h3>Temperature - {weatherInfo.temperature}</h3>
              <h3>Humidity - {weatherInfo.humidity}</h3>
              <h3>Sky Condition - {weatherInfo.weatherConditions}</h3>
                          
            </div>
            
          }
        </div> */}
    </div>
  )
}

export default Weather