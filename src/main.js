import './style.scss';
import processWeather from "./processWeather";
import getWeather from "./getWeather";
import fillWeather from "./fillWeather";
import fillError from "./fillError";

document.getElementById('formID').addEventListener('submit', (event) => processWeather(event, getWeather,fillWeather,fillError));