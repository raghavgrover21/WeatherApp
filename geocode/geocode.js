
const request = require('request')

let geocodeAddress = (address,callback) =>{
    let encodedAddress = encodeURIComponent(address)
    console.log(address)
    request({
        url :`http://www.mapquestapi.com/geocoding/v1/address?key=LtBn7aQ3hn3IjGzf9esWhKGm4GEZHBSA&location=${encodedAddress}`,
         json :true
    },(error,repsonse, body)=>{
        if (error)
        {
            callback('wrong address')
        }
        else{
            callback(undefined, {
                address: body.results[0].providedLocation,
                longitude: body.results[0].locations[0].latLng.lat,
                latitude: body.results[0].locations[0].latLng.lng
            })
                  
    }
    })

}
module.exports.geocodeAddress = geocodeAddress; 