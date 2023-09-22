import React from "react";
import "./DataContainer.css";

const DataContainer = ({ weather, isCelsius }) => {
  return (
    <article className="data_container">
      <div className="img_temp">
        <p className="temperature">
          {" "}
          {isCelsius
            ? weather.temperature.celsius.toFixed(0)
            : weather.temperature.farenheit.toFixed(0)}
          {""}º{isCelsius ? "C" : "F"}
        </p>

        <div className="image_container">
          <img src={weather.weather.icon} alt="" />
        </div>
      </div>
      <div className="time_city">
        <p className="city">
          {weather.city}, {weather.country}
        </p>
        <p className="time">{weather.weather.description}</p>
      </div>
    </article>
  );
};

export default DataContainer;
