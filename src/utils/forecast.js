const request = require("request");
const forecast = (data , callBack) =>{
    const access_token = 'c1308b6254db64b3dd2371eade39d79e'
    const url = 'http://api.weatherstack.com/current?access_key=' + access_token + '&query=' + data.lat + ',' + data.lng;
 
    console.log(url);
    request({ url : url , json : true} , (error, res) => {
        if(error){
            callBack('Issue connecting with weather service' , undefined );
        }
        else if(!res.body.current){
            callBack('Not able to fetch the weather Information',undefined);
        }else{
            callBack(undefined, 'The current weather is ' + res.body.current.weather_descriptions[0]);
        }
    })

}

module.exports = forecast;