import 'solid-js';

const api_key = import.meta.env.SECRET_KEY;
const queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=-19.4658&lon=-44.2467" + "&appid=" + api_key +"&lang=pt_br&units=metric";
const response = await fetch(queryURL);
const data = await response.json();
const feel_weather = data.main.feels_like;
const humidity = data.main.humidity;
const wind = data.wind.speed;
const desc = data.weather[0].description;

function HelloWorld() {
  
  return <li class="weather-card">
            <h1>Sete Lagoas </h1>
            <h2>
                <span>🌦️{feel_weather}°C</span>
                <span>({desc})</span>
                |
                <span>💧{humidity}%</span>
                |
                <span>🍃{wind}m/s</span>
          </h2>
        </li>;
}
export default HelloWorld;