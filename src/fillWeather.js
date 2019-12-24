export default function fillWeather(weather, fillElements) {
  fillElements(
    {
      picSrc: 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png',
      error: "",
      place: weather.name + ', ' + weather.sys.country,
      weather: 'Current weather: ' + weather.weather[0].main + ' ( ' + weather.weather[0].description + ' )',
      temperature: 'Temperature: ' + (weather.main.temp - 273.15).toFixed(0) + '°C',
      wind: 'Wind: ' + weather.wind.speed + 'm/s'
    });
  return {
    picSrc: 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png',
    error: "",
    place: weather.name + ', ' + weather.sys.country,
    weather: 'Current weather: ' + weather.weather[0].main + ' ( ' + weather.weather[0].description + ' )',
    temperature: 'Temperature: ' + (weather.main.temp - 273.15).toFixed(0) + '°C',
    wind: 'Wind: ' + weather.wind.speed + 'm/s'
  };
}
