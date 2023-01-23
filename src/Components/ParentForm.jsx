import React from 'react'
import FormCom from './form'
import WeatherCom from './weather'
import { ParForm, Form, H1 } from './style';
import { useState } from 'react';


export default function ParentForm() {
  const [allData, setAllData] = useState([]);

  const API_KEY = 'ac9905973ef041a98579acf404d24785';

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C4${country}&appid=${API_KEY}`);
    const data = await res.json();

    city && country ? setAllData([
      {
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      }
    ]) : setAllData([{error: 'Type Your City and Country'}]);
  }
  return (
    <ParForm>
      <H1>Current weather and forecast</H1>
        <Form>
          <FormCom prevent={getWeather} />
          <WeatherCom weatherData={allData} />
        </Form>
    </ParForm>
  )
}
