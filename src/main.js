import "./style.scss"
let APIkey = "74e541dab94c8071bb4282ecb2691ea0";
let weather;

function processInp() {
    let cityName = document.getElementById("searchInp").value;
    getWeather(cityName);
}

document.getElementById("submit").onclick = processInp;

function getWeather(cityName) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        dataType: "json",
        data: {
            q: cityName,
            appid: APIkey
        }
    })
        .done(
            function (data) {
                weather = data;
                //console.log(data.weather[0].main);
                //console.log((weather.main.temp - 273.15).toFixed(0));
                createPlace(weather);
            }
        )
}

function createPlace(weather) {
    let graphWeather = document.createElement('div');
    graphWeather.innerHTML = "<h1>Привет!" + weather.weather[0].main+"</h1>";


    document.getElementById("Body").appendChild(graphWeather)
}
