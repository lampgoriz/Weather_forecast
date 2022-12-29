import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getFavoritesCities} from "../../Redux/favoritesCities-selectors";
import {
    addFavoriteCityRequest, clearFavoritesCities,
    deleteFavoriteCityRequest,
    setFavoritesCitiesRequest
} from "../../Redux/favoritesCities-reducer";
import {getIsFetching, getUnit} from "../../Redux/app-selectors";
import {Preloader} from "../../common/Preloader";
import FavoritesCities from "./FavoritesCities";
import {getCitiesWeatherData} from "../../Redux/cityWeather-selectors";
import {
    clearCitiesWeather,
    requestCitiesWeather,
    setCitiesWeather,
} from "../../Redux/cityWeather-reducer";

const FavoritesCitiesContainer = (props) => {

    useEffect(() => {
        props.setFavoritesCitiesRequest();
        props.favoritesCities.map(async c => {
            let resp = await props.requestCitiesWeather(c);
        });


        // let weatherResponses = [];         #2 variant
        // weatherResponses = props.favoritesCities.map(async c => {
        //     let resp = await props.requestCitiesWeather(c);
        //     weatherResponses.push(resp);
        // });
        // props.setCitiesWeather(weatherResponses);

        return () => {
            props.clearFavoritesCities();
            props.clearCitiesWeather();
        };
    }, [props.favoritesCities.length]);

    if (props.isFetching) {
        return <Preloader/>
    }

    return <FavoritesCities weatherData={props.weatherData} unit={props.unit}/>
}

const mstp = (state) => ({
    favoritesCities: getFavoritesCities(state),
    isFetching: getIsFetching(state),
    weatherData: getCitiesWeatherData(state),
    unit: getUnit(state),
})

export default connect(mstp, {
    setFavoritesCitiesRequest,
    deleteFavoriteCityRequest, addFavoriteCityRequest, requestCitiesWeather,
    clearFavoritesCities, clearCitiesWeather, setCitiesWeather
})(FavoritesCitiesContainer);

