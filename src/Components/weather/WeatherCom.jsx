import React from 'react'
import { Data, Span, Weather } from './style'

export default function WeatherCom(props) {

  return (
    <div>
      {
        props.weatherData.map((e) => {
          return (
            <Weather>
              {!e.error ? 
                <>
                  <Data>Country: <Span>{e.country}</Span></Data>
                  <Data>City: <Span>{e.city}</Span></Data>
                  <Data>Temp: <Span>{e.temperature}</Span></Data>
                  <Data>Humid: <Span>{e.humidity}</Span></Data>
                  <Data>Desc: <Span>{e.description}</Span></Data> 
                </> :
                <Data>Error: <Span>{e.error}</Span></Data>
              }
            </Weather>
            )
        })
      }
    </div>
  )
}
