import { useEffect, useState } from "react";
import { getCoordinates } from "./assets/services/getCoordinates";
import { getCUrrentWeather as getCurrentWeather } from "./assets/services/getCurrentWeather";
import "./App.css";
import DataContainer from "./components/DataContainer/DataContainer";

function App() {
  const [weather, setweather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  useEffect(() => {
    const loadweather = async () => {
      const coordinates = await getCoordinates();
      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        setweather(weatherData);
      } else {
      }
    };
    loadweather();
  }, []);
  // console.log(weather);

  return (
    <div className="container_app">
      <div className="container_title">
        <h1 className="title">Weather App</h1>
      </div>
      {weather ? (
        <div className="weather_container">
          <DataContainer weather={weather} isCelsius={isCelsius} />
          <div className="container_button">
            <button
              className="change_button"
              onClick={() => setIsCelsius(!isCelsius)}
            >
              Change º {isCelsius ? "F" : "C"}
            </button>
          </div>
        </div>
      ) : (
        <p className="loading">Loading weather...</p>
      )}
    </div>
  );
}

export default App;
