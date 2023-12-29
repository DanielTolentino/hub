import "solid-js";
import "../Styles/WeatherCard.css";
import weatherData from "../lib/getData";

let main = weatherData.main_weather;
let feel = weatherData.feels_weather;
let humidity = weatherData.humidity;
let wind = weatherData.wind;
let desc = weatherData.desc;

function WeatherCard() {
  return (
    <li class="weather-card">
      <h1>Sete Lagoas </h1>
      <h2>
        <span>
          🌦️{main}°C | 🌡️ Sensação de {feel}°C&nbsp
        </span>
        <span>({desc}) </span>|<span> 💧{humidity}% </span>|
        <span> 🍃{wind}m/s</span>
      </h2>
    </li>
  );
}
export default WeatherCard;
