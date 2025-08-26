import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, SetWeatherInfo] = useState({
    city: "Wonderland",
    feelslike: 24,
    temp: 25,
    tempMin: 25,
    tempMax: 25,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    SetWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
