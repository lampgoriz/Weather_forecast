import {connect} from "react-redux";
import CityWeather from "./CityWeather";
import React, {useEffect, useState} from "react";
import {clearCitiesWeather, requestCityWeather} from "../../Redux/cityWeather-reducer";
import {Preloader} from "../../common/Preloader";
import {getCityWeatherData} from "../../Redux/cityWeather-selectors";
import {getIsFetching, getUnit} from "../../Redux/app-selectors";
import {clearFavoritesCities} from "../../Redux/favoritesCities-reducer";

const CityWeatherContainer = (props) => {

    useEffect(() => {
        const lat = '50.4333', lon = '30.5167';
        props.requestCityWeather(lat, lon);

        return () => {
            props.clearFavoritesCities();
            props.clearCitiesWeather();
        };
    }, [props.unit]);


    if (props.isFetching || !props.weatherData) {
        return <Preloader/>
    }

    return (
        <CityWeather
            weatherData={props.weatherData}
            unit={props.unit}
        />
    );
}

const mstp = (state) => ({
    isFetching: getIsFetching(state),
    weatherData: getCityWeatherData(state),
    unit: getUnit(state),
})

export default connect(mstp, {
    requestCityWeather, clearFavoritesCities, clearCitiesWeather
})(CityWeatherContainer);