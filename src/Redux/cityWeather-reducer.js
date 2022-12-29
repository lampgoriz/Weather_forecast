import {WeatherAPI} from "../api/api";

// action types
const SET_CITY_WEATHER = 'cityWeather/SET_CITY_WEATHER';
const SET_CITIES_WEATHER = 'cityWeather/SET_CITIES_WEATHER';
const CLEAR_CITIES_WEATHER = 'cityWeather/CLEAR_CITIES_WEATHER';

//action creators
export const setCityWeather = (weather) => ({type: SET_CITY_WEATHER, weather});
export const setCitiesWeather = (weather) => ({type: SET_CITIES_WEATHER, weather});
export const clearCitiesWeather = () => ({type: CLEAR_CITIES_WEATHER});

//thunk creators
export const requestCityWeather = (lat, lon) => async (dispatch) => {
    const response = await WeatherAPI.getCityWeather(lat, lon);
    // dispatch(addIsFetching());
    if (response.status === 200) {
        dispatch(setCityWeather(response.data));
        // dispatch(deleteIsFetching());
    }
}

export const requestCitiesWeather = (coordinates) => async (dispatch) => {
    // let citiesWeather = [];
    // coordinates.map(async c => {
    //     const [lat, lon] = c.split(',');
    //     let response = await WeatherAPI.getCityWeather(lat, lon)
    //     if (response.status === 200) {
    //         // citiesWeather.push(response.data);
    //         dispatch(setCitiesWeather(response.data));
    //     }
    //
    // })
    // Promise.all(citiesWeather).then(dispatch(setCitiesWeather(citiesWeather)));

    const [lat, lon] = coordinates.split(',');
    const response = await WeatherAPI.getCityWeather(lat, lon);
    if (response.status === 200) {

        dispatch(setCitiesWeather(response.data));

        // return response.data;      #2 variant
    }
}


const initialState = {
    city: null,
    cities: []
}

export const cityWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_WEATHER:
            return {
                ...state,
                city: action.weather,
            }
        case SET_CITIES_WEATHER:
            return {
                ...state,
                cities: [...state.cities, action.weather],
            }
        // case SET_CITIES_WEATHER:    #2 variant
        //     return {
        //         ...state,
        //         cities: [action.weather],
        //     }
        case CLEAR_CITIES_WEATHER:
            return {
                ...state,
                cities: [],
            }
        default :
            return state
    }
}