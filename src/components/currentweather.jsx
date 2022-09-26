import "./currentweather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="mainForCurrent">
      <div className="flexForCurrent">
      <div className="rightsideCurrent">
        <div>{Math.round(data?.list[0]?.main?.temp)}°C</div>
        <div>{Math.round(data?.list[0]?.main?.temp_kf)}°F</div>
        <div className="cityCountry">
          <div>{data?.city.name},</div>
          <div>{data?.city.country}</div>
        </div>
        <div>maxTemp :{Math.round(data?.list[0]?.main?.temp_max)}°C</div>
        <div>minTemp :{Math.round(data?.list[0]?.main?.temp_min)}°C</div>
      </div>
      <div className="leftsideCurrent">
        <div>
          <img
            style={{ background: "black" }}
            src={`https://openweathermap.org/img/w/${data?.list[0]?.weather[0]?.icon}.png`}
            alt=""
          />
        </div>
        <div>{data?.list[0]?.weather[0]?.description}</div>
        <div>Humidity :{Math.round(data?.list[0]?.main?.humidity)}°C</div>
        <div>Wind :{data?.list[0]?.wind?.deg}</div>
        <div>Visibility :{Math.round(data?.list[0]?.visibility)/1000}mi</div>
        {/* <div>Date :{data?.list[0]?.dt_txt}</div> */}
      </div>
    </div>
    </div>
  );
};
export default CurrentWeather;
