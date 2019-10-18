import './style.scss'

const compiledFunction = require('./template.pug');

let APIkey = '74e541dab94c8071bb4282ecb2691ea0';
let weather;

function fillElements(obj) {
    document.getElementById('graphWeather').innerHTML = compiledFunction({
        error: obj.error,
        picSrc: obj.picSrc,
        place: obj.place,
        weather: obj.weather,
        temperature: obj.temperature,
        wind: obj.wind
    });


}

function getWeather(cityName) {
    return $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        dataType: 'json',
        data: {
            q: cityName,
            appid: APIkey
        }
    })
}

function processWeather(event) {
    event.preventDefault();
    let cityName = event.target[0].value;
    getWeather(cityName)
        .done(
            function (data) {
                fillWeather(data);
            }
        )
        .fail(
            function (jqXHR) {
                fillError(jqXHR);
            }
        )
}

function fillWeather(weather) {
    fillElements(
        {
            picSrc: 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png',
            error: "",
            place: weather.name + ', ' + weather.sys.country,
            weather: 'Current weather: ' + weather.weather[0].main + ' ( ' + weather.weather[0].description + ' )',
            temperature: 'Temperature: ' + (weather.main.temp - 273.15).toFixed(0) + '°C',
            wind: 'Wind: ' + weather.wind.speed + 'm/s'
        });
}

function fillError(error) {
    fillElements({
            picSrc: '',
            error: error.status + ' ' + error.statusText + '\r\n' + 'Details: ' + error.responseJSON.message,
            place: '',
            weather: '',
            temperature: '',
            wind: ''
        }
    );
};


document.getElementById('formID').addEventListener('submit', processWeather);
