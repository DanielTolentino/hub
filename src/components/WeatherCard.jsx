import 'solid-js';
import "../Styles/WeatherCard.css"

const api_key = import.meta.env.SECRET_KEY;
const queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=-19.4658&lon=-44.2467" + "&appid=" + api_key +"&lang=pt_br&units=metric";
const response = await fetch(queryURL);
const data = await response.json();
const main_weather = data.main.temp;
const feels_weather = data.main.feels_like;
const humidity = data.main.humidity;
const wind = data.wind.speed;
const desc = data.weather[0].description;

function WeatherCard() {
  
  return <li class="weather-card">
            <h1>Sete Lagoas </h1>
            <h2>
                <span>🌦️{main_weather}°C | {feels_weather}°C (sensação 🌡️)</span>
                <span>({desc}) </span>
                |
                <span> 💧{humidity}% </span>
                |
                <span> 🍃{wind}m/s</span>
          </h2>
        </li>;
}
export default WeatherCard;