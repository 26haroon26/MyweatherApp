import React from "react";
import axios from "axios";
import { useState } from "react";

const CurrentWeather = () => {
  const [city, setcity] = useState("");
  const [weatherData, setweatherData] = useState(null);

  const weatherDetail = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4af925ee88cfd0aab4c5364a4982488e`
      )
      .then((response) => {
        console.log(response.data);
        setweatherData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <>
      <form onSubmit={weatherDetail}>
        <input
          type="text"
          placeholder="City Name"
          required
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        <input type="submit" value={"get weather"} />
      </form>
      <br />
      <br />
      {weatherData === null ? null : (
        <>
          <div>
            Temperature :{Math.round(weatherData?.list[0]?.main?.temp)}°C
          </div>
          <div>
            Temperature :{Math.round(weatherData?.list[0]?.main?.temp_kf)}°F
          </div>
          <div>
            Humidity :{Math.round(weatherData?.list[0]?.main?.humidity)}°C
          </div>
          <div>
            temp_max :{Math.round(weatherData?.list[0]?.main?.temp_max)}°C
          </div>
          <div>
            temp_min :{Math.round(weatherData?.list[0]?.main?.temp_min)}°C
          </div>
          <div>wind :{weatherData?.list[0]?.wind?.deg}</div>
          <div>
            visibility :{Math.round(weatherData?.list[0]?.visibility)}°C
          </div>
          <div>date & time :{weatherData?.list[0]?.dt_txt}</div>
          <div>name :{weatherData?.list[0]?.weather[0]?.description}</div>
          <div>
            <img
              style={{ background: "black" }}
              src={`https://openweathermap.org/img/w/${weatherData?.list[0]?.weather[0]?.icon}.png`}
              alt=""
            />
          </div>
          <div>country :{weatherData?.city.country}</div>
          <div>city :{weatherData?.city.name}</div>
        </>
      )}
    </>
  );
};
export default CurrentWeather;
