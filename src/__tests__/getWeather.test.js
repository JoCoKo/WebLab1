import getWeather from "../getWeather";

describe("Get weather", () => {
  const cityNameCorrect = "Санкт-Петербург";
  const cityNameWrong = "15462153546315";
  const dataSuccess = '{"coord":{"lon":30.32,"lat":59.94},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations","main":{"temp":276.37,"feels_like":273.51,"temp_min":276.15,"temp_max":276.48,"pressure":1004,"humidity":100},"visibility":450,"wind":{"speed":2,"deg":280},"clouds":{"all":90},"dt":1577144690,"sys":{"type":1,"id":8926,"country":"RU","sunrise":1577170875,"sunset":1577192085},"timezone":10800,"id":498817,"name":"Saint Petersburg","cod":200}';
  const dataError = {weather: {cod: "404", message: "city not found"}};
  const expectedErrorData = {"error": true, "weather": {"weather": {"cod": "404", "message": "city not found"}}};
  beforeEach(() => {
    fetch.resetMocks()
  });

test('Fetch called', async ()=>{
  fetch.mockResponse(dataSuccess);
  let res = await getWeather(cityNameCorrect);
  expect(fetch).toBeCalled();
});

test('Fetch called with right link', async ()=>{
  fetch.mockResponse(dataSuccess);
  let res = await getWeather(cityNameCorrect);
  expect(fetch).toBeCalledWith('https://api.openweathermap.org/data/2.5/weather?appid=74e541dab94c8071bb4282ecb2691ea0&q=Санкт-Петербург');
});

test('Correct handling of with bad cityname', async ()=>{
  fetch.mockResponse(JSON.stringify(dataError));
  let res = await getWeather(cityNameWrong);
  expect(res).toStrictEqual(expectedErrorData);
})

});