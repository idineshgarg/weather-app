const request = require('request');

const geocode = (address,callBack) => {
    const access_token = 'pk.eyJ1IjoiaWRpbmVzaGdhcmciLCJhIjoiY2tzbGUzNTV3MDQ1cjJvcDBxcmh5MWxrYyJ9.NCx-FnKI4BrOjMZIbN9B5g'
    const url =    'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + access_token;
    
    request({ url: url ,json : true }, ( error , res )=>{
        if(error){
            callBack('Unable to connect to location service' , undefined);
        }else if(res.body.features.length == 0){
            console.log('Unable to find please try different location', undefined);
        }
        else{
            const latlng = {
                lat : res.body.features[0].center[0],
                lng : res.body.features[0].center[1],
                location : res.body.features[0].place_name
            }
            callBack(undefined ,latlng);
        }
    })
}

module.exports = geocode