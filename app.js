var input = document.querySelector('.input_text');
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const check_humidify = document.querySelector(".humidity p");
const check_pressure = document.querySelector(".pressure p");
const check_wind_speed = document.querySelector(".speed p");
const check_lat_lon = document.querySelector(".latlon p");
var button= document.querySelector('.submit');

const weather = {};

const key = "30fa64618e95851e63439cfa240bd9f9";

button.addEventListener('click', function(name){
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            console.log(data)
            weather.temperature = data.main.temp;
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.humidity=data.main.humidity;
            weather.pressure=data.main.pressure;
            weather.wind_speed=data.wind.speed;
            weather.lat_lon=data.coord.lat;
            weather.lat_lon1=data.coord.lon;
            
        })
        .then(function(){
            displayWeather();
        });
    })

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    check_humidify.innerHTML = weather.humidity;
    check_pressure.innerHTML = weather.pressure;
    check_wind_speed.innerHTML = weather.wind_speed;
    check_lat_lon.innerHTML = weather.lat_lon+","+weather.lat_lon1;
}


