import {WeatherAPI} from "../api/api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

//thunk creators
export const requestCityWeather = createAsyncThunk(
    'cityWeather/requestCityWeather',
    async ({lat, lon}, thunkAPI) => {
        const response = await WeatherAPI.getCityWeather(lat, lon);
        return response.data;
    }
);

export const requestCitiesWeather = createAsyncThunk(
    'cityWeather/requestCitiesWeather',
    async (coordinates, thunkAPI) => {
        const [lat, lon] = coordinates.split(',');
        const response = await WeatherAPI.getCityWeather(lat, lon);
        if (response.status === 200) {
            return response.data;
        }
    }
);


const initialState = {
    city: null,
    cities: {}
}

const cityWeatherReducer = createSlice({
    name: 'favoritesCities',
    initialState,
    reducers: {
        clearCitiesWeather(state) {
            state.cities = []
        }
    },
    extraReducers: {
        [requestCityWeather.fulfilled]: (state, action) => {
            state.city = action.payload
        },
        [requestCitiesWeather.fulfilled]: (state, action) => {
            state.cities[`${action.payload.coord.lat},${action.payload.coord.lon}`] = (action.payload)
        },
    }
});

export const {setCitiesWeather, clearCitiesWeather} = cityWeatherReducer.actions;
export default cityWeatherReducer.reducer;
