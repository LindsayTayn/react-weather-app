import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, SetUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    SetUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    SetUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitTemperature = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheitTemperature)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
