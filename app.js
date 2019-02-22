const request = require('request')
const weather = require('./weather/weather')
// key = LtBn7aQ3hn3IjGzf9esWhKGm4GEZHBSA
 const yargs = require('yargs')
  const geocode = require('./geocode/geocode')
 const argv = yargs    //obhj that store the final parsed output
.options ({
    a: {
        demand: true,
        alias: 'address',
        describe:'address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;
geocode.geocodeAddress(argv.address, (err, result)=> {

    if(err)
    {
        console.log(err)
    }
    else
    {   
        console.log(result.longitude)
          console.log(result.latitude)
        // console.log(JSON.stringify())

         weather.getWeather(result.latitude,result.longitude,(err,weatherResult)=> 
         {
            //  console.log(result.logitude)
              if(err)
              {
              console.log("not working",err)
              
              }
            else
            console.log(JSON.stringify(weatherResult,undefined,2))
        })
        
    }

});
// weather.getWeather(39.944464,-75.163636,(err,result)=> 
//          {
//             // console.log(result.logitude)
//               if(err)
//               console.log("not working",err)
        
//             else
//             console.log(JSON.stringify(result,undefined,2))
//         })



// e9546fe15ca12f2b2acbe8ddd6f107fb - api key for weather