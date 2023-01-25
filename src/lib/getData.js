
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

  export default weatherData;