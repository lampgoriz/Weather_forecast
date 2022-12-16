import axios from "axios";

// const lat = 50.4333, lon = 30.5167;
// const APIkey = 'b576b32c49d545641ea3b96c463ad641';

// const instance = axios.create({
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'b576b32c49d545641ea3b96c463ad641'
//     },
//     baseURL: `https://api.openweathermap.org/data/2.5/weather?`
// })

    export const WeatherAPI = {
    getCityWeather: async (lat, lon, APIkey) => {
        // console.log( (await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)));
        return (await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`));
    }
}
