import 'solid-js';
import "../Styles/WeatherCard.css"

/* const queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=-19.4658&lon=-44.2467" + "&appid=" + api_key +"&lang=pt_br&units=metric";
const response = await fetch(queryURL);
const data = await response.json(); */

export function getWeatherData(api_key) {
  const queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=-19.4658&lon=-44.2467" + "&appid=" + api_key +"&lang=pt_br&units=metric";
  return fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      const main_weather = data.main.temp;
      const feels_weather = data.main.feels_like;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;
      const desc = data.weather[0].description;
      // do something with the data
      return {main_weather, feels_weather, humidity, wind, desc};
    });
}

const api_key = import.meta.env.SECRET_KEY;
//let weatherData = getWeatherData(api_key);

const weatherData = await getWeatherData(api_key);

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