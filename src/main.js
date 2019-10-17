import './style.scss'
const compiledFunction = require('./template.pug');

let APIkey = '74e541dab94c8071bb4282ecb2691ea0';
let weather;

function fillElements(picSrc, error, place, weather, temperature, wind) {
    document.getElementById('graphWeather').innerHTML = compiledFunction({
        error: error,
        picSrc:picSrc,
        place: place,
        weather: weather,
        temperature: temperature,
        wind: wind
    });


}

function getWeather(event) {
    let cityName = event.target[0].value;
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        dataType: 'json',
        data: {
            q: cityName,
            appid: APIkey
        }
    })
        .done(
            function (data) {
                //console.log(data);
                weather = data;
                fillWeather(weather);
            }
        )
        .fail(
            function (jqXHR) {
                fillElements('',
                    jqXHR.status + ' ' + jqXHR.statusText + '\r\n' + 'Details: ' + jqXHR.responseJSON.message,
                    '',
                    '',
                    '',
                    ''
                );
            }
        )
}

function fillWeather(weather) {
    fillElements(
        'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png',
        '',
        weather.name + ', ' + weather.sys.country,
        'Current weather: ' + weather.weather[0].main + ' ( ' + weather.weather[0].description + ' )',
        'Temperature: ' + (weather.main.temp - 273.15).toFixed(0) + '°C',
        'Wind: ' + weather.wind.speed + 'm/s'
    );
}

document.getElementById('formID').addEventListener('submit', getWeather);
