import {WeatherAPI} from "../api/api";
import {addIsFetching, deleteIsFetching} from "./app-reducer";

// action types
const SET_CITY_WEATHER = 'cityWeather/SET_CITY_WEATHER';

//action creators
export const setCityWeather = (weather) => ({type: SET_CITY_WEATHER, weather})

//thunk creators
export const requestCityWeather = (lat, lon, APIkey) => async (dispatch) => {
    const response = await WeatherAPI.getCityWeather(lat, lon, APIkey);
    dispatch(addIsFetching());
    if (response.status === 200) {
        dispatch(setCityWeather(response.data));
        dispatch(deleteIsFetching());
    }
}

const initialState = {
    cities: [
        {
            coord: {
                lon: null,
                lat: null
            },
            weather: [
                {
                    main: '',
                    description: '',
                    icon: ''
                }
            ],
            main: {
                temp: null,
                feels_like: null,
                temp_min: null,
                temp_max: null,
                pressure: null,
                humidity: null
            },
            visibility: null,
            wind: {
                speed: null,
                deg: null,
                gust: null
            },
            sys: {
                type: null,
                id: null,
                country: '',
                sunrise: null,
                sunset: null
            },
            timezone: null,
            id: null,
            name: '',
        }
    ]
}

export const cityWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_WEATHER:
            return {
                ...state,
                cities: [action.weather],
            }
        default :
            return state
    }
}