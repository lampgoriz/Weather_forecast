import {WeatherAPI} from "../api/api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {coordObjToString, roundCoordinate} from "../tools/roundCoordinate";

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
    city: null,
    cities: {}
}

const cityWeatherReducer = createSlice({
    name: 'favoritesCities',
    initialState,
    reducers: {},
    extraReducers: {
        [requestCityWeather.fulfilled]: (state, action) => {
            state.city = action.payload;
            state.city.coord = roundCoordinate({lat: action.payload.coord.lat, lon: action.payload.coord.lon})
        },
        [requestCitiesWeather.fulfilled]: (state, action) => {
            let roundedCoord = roundCoordinate({lat: action.payload.coord.lat, lon: action.payload.coord.lon});
            state.cities[`${coordObjToString(roundedCoord.lat, roundedCoord.lon)}`] = action.payload
            state.cities[`${coordObjToString(roundedCoord.lat, roundedCoord.lon)}`].coord = roundedCoord
        },
    }
});

export const {setCitiesWeather} = cityWeatherReducer.actions;
export default cityWeatherReducer.reducer;


const cityWeather = async (cityCoordinate) => {
    const {lat, lon} = roundCoordinate(cityCoordinate);
    const response = await WeatherAPI.getCityWeather(lat, lon);
    if (response.status === 200) {
        return response.data;
    }
}