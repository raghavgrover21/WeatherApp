const request = require('request')
let getWeather = (longitude,latitude,callback) =>
{
    request({
        url : `https://api.darksky.net/forecast/e9546fe15ca12f2b2acbe8ddd6f107fb/${longitude},${latitude}`,
        json : true
    },(err, response,body)=>{
        if(err)
        callback("error")

        else if(response.statusCode === 400)
        {
            callback("unable to fetch weather")
        }
        else
            callback(undefined, {
                temperature: body.currently.temperature
            })
        // console.log(body.currently.temperature)
        
        })

}
module.exports.getWeather = getWeather