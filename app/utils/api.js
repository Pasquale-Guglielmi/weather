var axios = require('axios');


var key = '7976b116717344282e42d04344afd651';
var forecastEndpoint ='http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=' + key + '&cnt=5';

function getForecast (location) {
    var query = forecastEndpoint.replace(/CITY-NAME/, location);
    return axios.get(query)
        .then(function(result) {
            return result.data.list;
        })
}

module.exports = {
    getForecast
}