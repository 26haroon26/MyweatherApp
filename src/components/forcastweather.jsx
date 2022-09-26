import React from "react";
import "./forecastweather.css";

function Abcd({ Data }) {
  return (
    <>
      <div className="forhour">
        <p>{Data?.dt_txt.slice(0,11)}</p> 
        <p>{Data?.dt_txt.slice(11,16)}</p> 
        <p>{Data?.main?.temp}°C</p>
        <p><img
          src={`https://openweathermap.org/img/w/${Data?.weather[0].icon}.png`}
          alt=""
        /></p>
        <p>{Data?.weather[0]?.description}</p>
      </div>
    </>
  );
}
// for (let i = 0; i < 5; i++) {
  //   for (let j = 0; j < 8; j++) {
  //    {!data.list === {} &&
  //     <Abcd Data={data.list} />}}
  //     } 

const ForCastWeather = ({ data }) => {
    
  return (
    <>
      <div className="forDays">
        <div className="forul">
     
          {data.list.map(function (items, i) {
            return <Abcd Data={items} key={i} />;
          })}

        </div>
      </div>
    </>
  );
};

export default ForCastWeather;
