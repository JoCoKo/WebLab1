import './style.scss'

let APIkey = '74e541dab94c8071bb4282ecb2691ea0';
let weather;

function processInp() {
    let cityName = document.getElementById('searchInp').value;
    getWeather(cityName);
}

document.getElementById('submit').onclick = processInp;

function fillElements(picSrc, error, place, weather, temperature, wind) {
    document.getElementById('picID').src = picSrc;
    document.getElementById('errorID').innerText = error;
    document.getElementById('placeID').innerText = place;
    document.getElementById('weatherID').innerText = weather;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('wind').innerText = wind;
}

function getWeather(cityName) {
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
