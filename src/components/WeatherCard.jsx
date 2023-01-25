import 'solid-js';
import "../Styles/WeatherCard.css"
import weatherData from '../lib/getData';

/* const queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=-19.4658&lon=-44.2467" + "&appid=" + api_key +"&lang=pt_br&units=metric";
const response = await fetch(queryURL);
const data = await response.json(); */
//

let main = weatherData.main_weather;
let feel = weatherData.feels_weather
let humidity = weatherData.humidity
let wind = weatherData.wind
let desc = weatherData.desc

function WeatherCard() {
  
  return <li class="weather-card">
                <h1>Sete Lagoas </h1>
            <h2>
                <span>🌦️{main}°C | {feel}°C (sensação 🌡️)</span>
                <span>({desc}) </span>
                |
                <span> 💧{humidity}% </span>
                |
                <span> 🍃{wind}m/s</span>
          </h2>
        </li>;
}
export default WeatherCard;