import React from "react";

function Abcd(Data) {
  return (
    <>
      <div className="forhour">
        <p>{Data.time}</p> <p>{Data.temperature}</p>
        {/* <img src={`http://openweathermap.org/img/wn/${Data.image}@2x.png` }alt="" /> */}
        <p>{Data.name}</p>
      </div>
    </>
  );
}
const ForCastWeather = (data) => {
  return (
    <>
      <div className="forDays">
        <div className="forul">
          <Abcd Data={data} />
          {/* <div>
            Temperature :{Math.round(weatherData?.list[0]?.main?.temp)}C
          </div>
          <div>Temperature :{weatherData?.list[0]?.dt_txt}C</div>
          <div>
            Temperature :{weatherData?.list[0]?.weather[0]?.description}
          </div>
          <div>Temperature :{weatherData?.list[0]?.weather[0]?.icon}</div>*/}
        </div> 
      </div>
    </>
  );
};

export default ForCastWeather;
