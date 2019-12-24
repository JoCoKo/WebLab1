jest.mock("../getWeather");
jest.mock("../fillError");
jest.mock("../fillWeather");
import processWeather from "../processWeather";
import {body} from "../setupJest";
import getWeather from "../getWeather";
import fillError from "../fillError";
import fillWeather from "../fillWeather";


describe("Process weather", () => {
  const dataSuccess = JSON.parse('{"weather":{"coord":{"lon":30.32,"lat":59.94},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"base":"stations","main":{"temp":276.87,"feels_like":273.91,"temp_min":276.48,"temp_max":277.15,"pressure":1002,"humidity":93},"visibility":1400,"wind":{"speed":2,"deg":290},"clouds":{"all":90},"dt":1577128837,"sys":{"type":1,"id":8926,"country":"RU","sunrise":1577084454,"sunset":1577105648},"timezone":10800,"id":498817,"name":"Saint Petersburg","cod":200},"error":null}');
  const dataError = JSON.parse('{"weather":{"cod":"404","message":"city not found"},"error":true}');
  let event;


  beforeEach(() => {
    document.body.innerHTML = body;
    getWeather.mockReset();
    getWeather.mockImplementation(jest.fn(async(cityName) => {
      if (cityName === dataSuccess.weather.name)
        return (dataSuccess);
      else
        return (dataError);
    }));
    fillWeather.mockReset();
    fillWeather.mockImplementation(jest.fn(() => {}));
    fillError.mockReset();
    fillError.mockImplementation(jest.fn(() => {}));
    event = {
      preventDefault: jest.fn(() => {
      }),
      target: [{
        value: "Saint Petersburg"
      }]
    };

  });

  test('проверка вызова preventDefault', async () => {
    await processWeather(event);
    expect(event.preventDefault.mock.calls.length).toBe(1);
  });

  test('проверка вызова getWeather', async () => {
    await processWeather(event);
    expect(getWeather).toHaveBeenCalledTimes(1);
  });

  test('проверка вызова fillWeather', async () => {
    await processWeather(event);
    expect(fillWeather.mock.calls.length).toBe(1);
  });

  test('проверка вызова fillError', async () => {
    await processWeather({...event, target: [{value: 'wdqwdqwd'}]});
    expect(fillError.mock.calls.length).toBe(1);
  });

});