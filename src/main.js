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
                //console.log(data);
                weather = data;
                fillWeather(weather);
            }
        )
        .fail(
            function (jqXHR, exception) {
                let errorText = document.createElement('h3');
                let st="\r\n";
                document.getElementById("errorID").innerText=jqXHR.status+" "+jqXHR.statusText+st+"Details: "+jqXHR.responseJSON.message; // <p> для переноса
                //document.getElementById("errorID").innerHTML=jqXHR.status+" "+jqXHR.statusText+"<br>"+Details: "+jqXHR.responseJSON.message;
                document.getElementById("picID").src="";
                document.getElementById("placeID").innerText ="";
                document.getElementById("weatherID").innerText = "";
                document.getElementById("temperature").innerText = "";
                document.getElementById("wind").innerText = "";
            }

        )
}

function fillWeather(weather) {
    document.getElementById("picID").src="http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png";
    document.getElementById("errorID").innerText="";
    document.getElementById("placeID").innerText = weather.name+", "+weather.sys.country;
    document.getElementById("weatherID").innerText = "Current weather: "+weather.weather[0].main+" ( "+weather.weather[0].description+" )";
    document.getElementById("temperature").innerText = "Temperature: "+(weather.main.temp - 273.15).toFixed(0)+"°C";
    document.getElementById("wind").innerText = "Wind: "+weather.wind.speed+"m/s";
}
