import React, { useEffect, useState } from 'react';

import searchIcon from './assets/search.png'
import sunny from './assets/sunny.jpg'
import rainy from './assets/rainy.jpg'
import cloudy from './assets/cloudy.jpg'
import airIcon from './assets/air.png'
import humidityIcon from './assets/humidity.png'
import mainIcon from './assets/mainIcon.webp'

const WeatherDetails = (props) =>{
  return(
    <>
      <div className="image">
        <img src={props.icon} alt="" />
      </div>
      <div className="temp">{props.temp}<sup>o</sup>C</div>
      <div className="location">{props.city}</div>
      <div className="country">{props.country}</div>
      <div className="cord">
        <div className="late">
          <span>Latitude </span>
          <span>{props.late}</span>
        </div>
        <div className="long">
          <span>Longitude </span>
          <span>{props.long} </span>
        </div>
      </div>
      <div className="data_container">
        <div className="element">
          <img src={humidityIcon} className='icon' alt="" />
          <div className="data">
            <div className="humidity_percent">{props.humidity} %</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={airIcon} className='icon' alt="wind" />
          <div className="data">
            <div className="air_percent">{props.wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Weather() {
  let apiKey='d4b90e7daf0d17e7507a5b552436b036';

  const [text, setText] = useState('');
  const [icon, setIcon] = useState(cloudy);
  const [temp, setTemp] = useState(0);
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('');
  const [late,setLate] = useState(0);
  const [long,setLong] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind,setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('');

  const weatherIconsmap = {
    '01d':sunny,
    '01n':sunny,
    '02d':sunny,
    '02n':sunny,
    '03d':cloudy,
    '03n':cloudy,
    '04d':cloudy,
    '04n':cloudy,
    '09d':rainy,
    '09n':rainy,
    '10d':rainy,
    '10n':rainy,
    '13d':cloudy,
    '13n':cloudy,

  }

  const search = async (text) => {
    setLoading(true);
    const api= `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=metric`;
    
    try{
      let res = await fetch(api);
      let data = await res.json();
      if(data.cod==='404'){
        console.log('City not found');
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLate(data.coord.lat);
      setLong(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconsmap[weatherIconCode] || sunny);
      setCityNotFound(false);

    } catch(error){
      setError("An error occurred while Fetching Data" )
    }finally{
      setLoading(false)
    }
  }

  const handleCity = (e) => {
    const cityName = e.target.value;
    setText(cityName);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search(text);
    }
  }

  return (
    <>
        <div className='container'>
          <header>
            <div className='header'>
              <img src={mainIcon} alt="" />
              <h1> Weather App</h1>
            </div>
          
            <div className="input_container">
                <input type="text" 
                value={text} 
                onKeyDown={handleKeyDown}
                className='cityInput'
                placeholder='Enter City Name ...'
                onChange={handleCity}/>
                <img src={searchIcon} alt="" onClick={()=>search(text)}/>
            </div>
          </header>

          {loading && <div className="loading">Loading...</div>}
          {error && <div className="erroeMessage">{error}</div>}
          {cityNotFound && <div className="cityNotFound">City Not Found</div>}


          {!loading && !cityNotFound&& !error && <WeatherDetails 
            temp={temp} icon={icon} 
            city={city} country={country} 
            late={late} long={long}
            humidity={humidity} wind={wind}
          />}
          <p className='copyright'>
            Designed by <span>Sanjai M</span>
          </p>
        </div>
    </>
  )
}

export default Weather
