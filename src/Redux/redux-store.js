import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {favoritesCitiesReducer} from "./favoritesCitys-reducer";
import {cityWeatherReducer} from "./cityWeather-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    favoritesCities: favoritesCitiesReducer,
    cityWeather: cityWeatherReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    compose(applyMiddleware(thunkMiddleware))));

export default store;