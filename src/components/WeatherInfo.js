import React from 'react'


function WeatherInfo(props) {

    // console.log(props);

  return (
    <div>
        
        <div>
            <h2>Live Weather Updates from {props.weatherInfo.city}!</h2>
            <br/>
            <h3>Temperature - {props.weatherInfo.temperature}</h3>
            <h3>Humidity - {props.weatherInfo.humidity}</h3>
            <h3>Sky Condition - {props.weatherInfo.weatherConditions}</h3>
        </div>
        
    </div>
  )
}

export default WeatherInfo