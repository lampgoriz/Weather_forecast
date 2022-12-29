import './App.css';
import {Preloader} from "./common/Preloader";
import {connect} from "react-redux";
import {Route, Routes} from "react-router";
import CityWeatherContainer from "./components/CityWeather/CityWeatherContainer";
import Header from "./components/Header/Header";
import FavoritesCitiesContainer from "./components/FavoritesCities/FavoritesCitiesContainer";
import {setInitializeRequest} from "./Redux/app-reducer";
import {useEffect} from "react";
import {getIsInitialized} from "./Redux/app-selectors";
import SearchContainer from "./components/Search/SearchContainer";

const App = (props) => {

    useEffect(() => {
        props.setInitializeRequest();
    }, [props.isInitialized])

    if (!props.isInitialized) {
        return <Preloader/>
    }

    return (
        <div>
            <Header/>
            <div className='container'>
                <Routes>
                    <Route
                        path='/favoritesCities'
                        element={<FavoritesCitiesContainer/>}>
                    </Route>
                    <Route
                        path='/cityWeather'
                        element={<CityWeatherContainer/>}>
                    </Route>
                    <Route
                        path='/search'
                        element={<SearchContainer />}>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

const mstp = (state) => ({
    isInitialized: getIsInitialized(state),
})

export default connect(mstp, {setInitializeRequest})(App);
