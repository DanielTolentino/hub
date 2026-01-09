const api_key = import.meta.env.SECRET_KEY;

let weatherData;

export async function getWeatherData(api_key) {
  // Return mock data if no API key is configured
  if (!api_key) {
    return {
      main_weather: 25,
      feels_weather: 27,
      humidity: 65,
      wind: 3.5,
      desc: "parcialmente nublado"
    };
  }

  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=-19.4658&lon=-44.2467" +
    "&appid=" +
    api_key +
    "&lang=pt_br&units=metric";
  
  try {
    return await fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        const main_weather = data.main.temp.toFixed(0);
        const feels_weather = data.main.feels_like.toFixed(0);
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const desc = data.weather[0].description;
        return { main_weather, feels_weather, humidity, wind, desc };
      });
  } catch (error) {
    // Return mock data on error
    return {
      main_weather: 25,
      feels_weather: 27,
      humidity: 65,
      wind: 3.5,
      desc: "parcialmente nublado"
    };
  }
}

export default weatherData = await getWeatherData(api_key);
