import fillElements from "./fillElements";
import getWeather from "./getWeather";
import fillError from "./fillError";
import fillWeather from "./fillWeather";

const processWeather = async (event) => {
  try {
    const cityName = event.target[0].value;
    event.preventDefault();
    const data = await getWeather(cityName);
    if (data.error) {
      await fillError(data.weather, fillElements);
    } else {
      await fillWeather(data.weather, fillElements);
    }
  } catch (data) {
    await fillError(data.weather, fillElements);
  }
};
export default processWeather;