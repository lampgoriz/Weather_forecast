import axios from "axios";

// const instance = axios.create({
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'b576b32c49d545641ea3b96c463ad641'
//     },
//     baseURL: `https://api.openweathermap.org/data/2.5/weather?`
// })

const APIkey = 'b576b32c49d545641ea3b96c463ad641';
// const APIkey = 'cb11771fc9c081ccdc7ce1649a82b5a3';

export const WeatherAPI = {
    getCityWeather: async (lat, lon) => {
        const unit = LocalStorageAPI.getUnit() === 'C' ? 'metric' : 'imperial'
        // console.log( (await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)));
        return (await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${unit}`));
    }
}

export const GeocodingAPI = {
    searchCity: async (cityName, limit = 5) => {
        return (await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${APIkey}`))
    }
}

export const LocalStorageAPI = {
    addFavorite: (cityCoordinate) => {
        let storage = localStorage.getItem('favCities')
            ? JSON.parse(localStorage.getItem('favCities'))
            : [];
        if (storage.length === 0) {
            storage.push(cityCoordinate);
        } else {
            if (storage.find(cord => cord !== cityCoordinate)) {
                storage.push(cityCoordinate);
            }
        }
        localStorage.setItem('favCities', JSON.stringify(storage));
    },

    deleteFavorite: (cityCoordinate) => {
        let storage = JSON.parse(localStorage.getItem('favCities'));
        let filtered = storage.filter(cord => cord !== cityCoordinate);
        localStorage.setItem('favCities', JSON.stringify(filtered));
    },

    getFavorites: () => {
        if (localStorage.getItem('favCities')) {
            return JSON.parse(localStorage.getItem('favCities'));
        }
        return [];
    },

    setUnit: (unit) => {
        localStorage.setItem('unit', unit);
    },

    getUnit: () => {
        if (!localStorage.getItem('unit')) {
            return 'C'
        } else {
            return localStorage.getItem('unit');
        }
    },
}
