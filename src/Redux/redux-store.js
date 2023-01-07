import favoritesCitiesReducer from "./favoritesCities-reducer";
import cityWeatherReducer from "./cityWeather-reducer";
import {appReducer} from "./app-reducer";
import searchReducer from "./search-reducer";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        favorites: favoritesCitiesReducer,
        cityWeather: cityWeatherReducer,
        app: appReducer,
        search: searchReducer,
    }
})

export default store;