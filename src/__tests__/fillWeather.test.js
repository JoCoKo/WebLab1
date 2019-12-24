import fillWeather from "../fillWeather";

describe("Fill weather", () => {
  const weather = JSON.parse('{"coord":{"lon":30.32,"lat":59.94},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":277.97,"feels_like":274.51,"temp_min":277.59,"temp_max":278.15,"pressure":997,"humidity":93},"visibility":10000,"wind":{"speed":3,"deg":140},"rain":{"1h":0.51},"clouds":{"all":75},"dt":1577038260,"sys":{"type":1,"id":8926,"country":"RU","sunrise":1576998028,"sunset":1577019216},"timezone":10800,"id":498817,"name":"Saint Petersburg","cod":200}');
  const fillElements = jest.fn(() => {});
  const result  = JSON.parse('{"picSrc":"http://openweathermap.org/img/wn/10n@2x.png","error":"","place":"Saint Petersburg, RU","weather":"Current weather: Rain ( light rain )","temperature":"Temperature: 5°C","wind":"Wind: 3m/s"}');


  test('Call fillElements', () => {
      fillWeather(weather, fillElements);
      expect(fillElements.mock.calls.length).toBe(1);
  });
  test('Correct result', () => {
    expect(fillWeather(weather, fillElements)).toEqual(result);
  });
});