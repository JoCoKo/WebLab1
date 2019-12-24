const getWeather = async (cityName) => {
  let APIkey = '74e541dab94c8071bb4282ecb2691ea0';
  let result = {
    weather: null,
    error: null
  };

  result.weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${APIkey}&q=${cityName}`).then(res => res.json());
  if (result.weather.cod !== 200)
    result.error = true;
  return result;
};
export default getWeather;