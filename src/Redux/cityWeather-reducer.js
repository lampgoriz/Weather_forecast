import {WeatherAPI} from "../api/api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {coordObjToString, roundCoordinate} from "../tools/roundCoordinate";
import {addIsFetching, deleteIsFetching} from "./app-reducer";

//thunk creators
export const requestCityWeather = createAsyncThunk(
    'cityWeather/requestCityWeather',
    async (cityCoordinate, thunkAPI) => {
        return cityWeather(cityCoordinate);
    }
);

export const requestCitiesWeather = createAsyncThunk(
    'cityWeather/requestCitiesWeather',
    async (cityCoordinate, thunkAPI) => {
        return cityWeather(cityCoordinate);
    }
);


const initialState = {
    cityToFind: null,
    city: null,
    cities: {}
}

const cityWeatherReducer = createSlice({
    name: 'favoritesCities',
    initialState,
    reducers: {
        updateCityToFind: (state, action) => {
            state.cityToFind = action.payload
        },
        deleteFavCity: (state, action) => {
            delete state.cities[action.payload]
        }
    },
    extraReducers: {
        [requestCityWeather.fulfilled]: (state, action) => {
            state.city = action.payload;
            state.city.coord = roundCoordinate({lat: action.payload.coord.lat, lon: action.payload.coord.lon})
            // state.city.coord = action.payload.coord
        },
        [requestCitiesWeather.fulfilled]: (state, action) => {
            let roundedCoord = roundCoordinate({lat: action.payload.coord.lat, lon: action.payload.coord.lon});
            // let roundedCoord = action.payload.coord;
            state.cities[`${coordObjToString(roundedCoord.lat, roundedCoord.lon)}`] = action.payload
            state.cities[`${coordObjToString(roundedCoord.lat, roundedCoord.lon)}`].coord = roundedCoord
        },
    }
});

export const {updateCityToFind, deleteFavCity} = cityWeatherReducer.actions;
export default cityWeatherReducer.reducer;


const cityWeather = async (cityCoordinate) => {
    const {lat, lon} = roundCoordinate(cityCoordinate);
    // const {lat, lon} = cityCoordinate;
    const response = await WeatherAPI.getCityWeather(lat, lon);
    if (response.status === 200) {
        return response.data;
    }
}