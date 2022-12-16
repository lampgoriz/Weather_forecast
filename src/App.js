import './App.css';
import {Preloader} from "./common/Preloader";
import {requestCityWeather} from "./Redux/cityWeather-reducer";
import {connect} from "react-redux";
import {Route, Routes} from "react-router";
import CityWeatherContainer from "./components/CityWeather/CityWeatherContainer";
import Header from "./components/Header/Header";
import FavoritesCitiesContainer from "./components/FavoritesCities/FavoritesCitiesContainer";

const App = (props) => {

    // const lat = '50.4333', lon = '30.5167';
    // const APIkey = 'b576b32c49d545641ea3b96c463ad641';
    // props.requestCityWeather(lat, lon, APIkey);

    if (props.isFetching) {
        return <Preloader/>
    }

    return (
        <div>
            <Header/>
            <Routes>
                <Route
                    path='/favoritesCities'
                    element={<FavoritesCitiesContainer/>}>
                </Route>
                <Route
                    path='/cityWeather'
                    element={<CityWeatherContainer/>}>
                </Route>
            </Routes>
        </div>
    )
}

const mstp = (state) => ({
    isFetching: state.app.isFetching,
    // isInitialized: state.app.isInitialized,
})

export default connect(mstp, {})(App);
