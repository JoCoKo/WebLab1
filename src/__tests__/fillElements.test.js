import fillElements from "../fillElements";
import {body} from "../setupJest";

describe("Fill Elements", () => {
  const obj = {
    picSrc: "http://openweathermap.org/img/wn/09n@2x.png",
    error: "",
    place: "Saint Petersburg, RU",
    weather: "Current weather: Rain ( shower rain )",
    temperature: "Temperature: 5°C",
    wind: "Wind: 2m/s"
  };

  beforeEach(() => {
    document.body.innerHTML = body;
  });

  test('Correct visualisation', () => {
    const expected = '<div id="errorID"></div><img id="picID" src="http://openweathermap.org/img/wn/09n@2x.png"><div id="placeID">Saint Petersburg, RU</div><div id="weatherID">Current weather: Rain ( shower rain )</div><div id="temperature">Temperature: 5°C</div><div id="wind">Wind: 2m/s</div>';
    fillElements(obj);
    expect(document.getElementById('graphWeather').innerHTML).toEqual(expected);
  });



});