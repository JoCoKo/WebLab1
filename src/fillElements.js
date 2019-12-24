const compiledFunction = require('./template.pug');
export default function fillElements(obj) {
  document.getElementById('graphWeather').innerHTML = compiledFunction({
    error: obj.error,
    picSrc: obj.picSrc,
    place: obj.place,
    weather: obj.weather,
    temperature: obj.temperature,
    wind: obj.wind
  });
}