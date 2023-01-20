import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getFavoritesCities} from "../../Redux/favoritesCities-selectors";
import {
    addFavoriteCityRequest,
    deleteFavoriteCityRequest,
    setFavoritesCitiesRequest
} from "../../Redux/favoritesCities-reducer";
import {getIsFetching, getUnit} from "../../Redux/app-selectors";
import {Preloader} from "../../common/Preloader";
import FavoritesCities from "./FavoritesCities";
import {getCitiesWeatherData} from "../../Redux/cityWeather-selectors";
import {
    requestCitiesWeather,
    // setCitiesWeather,
} from "../../Redux/cityWeather-reducer";
import {coordStringToObj} from "../../tools/roundCoordinate";

const FavoritesCitiesContainer = (props) => {

    useEffect(() => {
        props.setFavoritesCitiesRequest();

        for (const key in props.favoritesCities) {
            props.requestCitiesWeather(coordStringToObj(key));
        }
    }, [Object.keys(props.favoritesCities).length, props.unit]);

    if (props.isFetching || !props.weatherData) {
        return <Preloader/>
    }

    return <FavoritesCities
        weatherData={props.weatherData}
        unit={props.unit}
        favoritesCities={props.favoritesCities}
    />
}

const mstp = (state) => ({
    favoritesCities: getFavoritesCities(state),
    isFetching: getIsFetching(state),
    weatherData: getCitiesWeatherData(state),
    unit: getUnit(state),
})

export default connect(mstp, {
    setFavoritesCitiesRequest, requestCitiesWeather,
    // setCitiesWeather,
})(FavoritesCitiesContainer);