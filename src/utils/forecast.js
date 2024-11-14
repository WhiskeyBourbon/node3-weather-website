const request = require('request')

const forecast = (lon, lat, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + lon + '&lat=' + lat + '&appid=276b36abdc6c4ac84d1e9e9089e27fc7&units=imperial'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.cod === '400') {
            callback('Unable to find location', undefined)
        } else {
            const currentTemp = body.main.temp
            const feelsLikeTemp = body.main.feels_like
            callback(undefined, body.weather[0].description + '. It is currently ' + currentTemp + ' degrees out. It feels like ' + feelsLikeTemp + ' degrees out.'
            )
        }  
    })
}

module.exports = forecast



