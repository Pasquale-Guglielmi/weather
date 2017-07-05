var axios = require('axios');


var key = '7976b116717344282e42d04344afd651';
var currentWeatherEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=' + key;

function iconURL (iconId) {
    var iconEndpoing = 'http://openweathermap.org/img/w/ICON-ID.png';
    return iconEndpoing.replace(/ICON-ID/, iconId);
}

function getCurrentWeather (location) {
    var query = currentWeatherEndpoint.replace(/CITY-NAME/, location);
    return axios.get(query)
        .then(function(result) {
            var weather = result.data.weather[0].description;
            var icon = iconURL(result.data.weather[0].icon);
            var temp = result.data.main.temp;
            var hum = result.data.main.humidity;
            return console.log([weather,icon, 'Temperature: ' + temp + '˚K', 'Humidity: ' + hum + '%']);
        })
}


module.exports = {
    getWeather: function(location) {
        getCurrentWeather(location);
    }
}