import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {favoritesCitiesReducer} from "./favoritesCities-reducer";
import {cityWeatherReducer} from "./cityWeather-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";
import {searchReducer} from "./search-reducer";
import {configureStore} from "@reduxjs/toolkit";


// let reducers = combineReducers({
//     favoritesCities: favoritesCitiesReducer,
//     cityWeather: cityWeatherReducer,
//     app: appReducer,
//     search: searchReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(
//     compose(applyMiddleware(thunkMiddleware))));



const store = configureStore({
    reducer:{
        favoritesCities: favoritesCitiesReducer,
        cityWeather: cityWeatherReducer,
        app: appReducer,
        search: searchReducer,
    }
})

export default store;