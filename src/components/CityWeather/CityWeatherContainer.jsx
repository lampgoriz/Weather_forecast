import {connect} from "react-redux";
import CityWeather from "./CityWeather";
import React, {useEffect, useState} from "react";
import {clearCitiesWeather, requestCityWeather} from "../../Redux/cityWeather-reducer";
import {Preloader} from "../../common/Preloader";
import {getCityWeatherData} from "../../Redux/cityWeather-selectors";
import {getIsFetching, getUnit} from "../../Redux/app-selectors";
import {
    addFavoriteCityRequest,
    clearFavoritesCities,
    deleteFavoriteCityRequest
} from "../../Redux/favoritesCities-reducer";
import style from './CityWeather.module.css'
import {getFavoritesCities} from "../../Redux/favoritesCities-selectors";

const CityWeatherContainer = (props) => {

    useEffect(() => {
        const lat = '50.4333', lon = '30.5167';
        props.requestCityWeather({lat, lon});

        // return () => {
        //     props.clearFavoritesCities();
        //     props.clearCitiesWeather();
        // };
    }, [props.unit]);


    if (props.isFetching || !props.weatherData) {
        return <Preloader/>
    }

    let weatherData = {
        name: props.weatherData.name,
        country: props.weatherData.sys.country,
        temperature: props.weatherData.main.temp,
        feels_like: props.weatherData.main.feels_like,
        max: props.weatherData.main.temp_max,
        min: props.weatherData.main.temp_min,
        clouds: props.weatherData.clouds.all,
        visibility: props.weatherData.visibility,
        humidity: props.weatherData.humidity,
        pressure: props.weatherData.pressure,
        speed: props.weatherData.wind.speed,
        deg: props.weatherData.wind.deg,
    }


    return (
        <div className={style.city__weather}>
            <CityWeather
                weatherData={weatherData}
                unit={props.unit}
                addFavoriteCityRequest={props.addFavoriteCityRequest}
                deleteFavoriteCityRequest={props.deleteFavoriteCityRequest}
                favoritesCities={props.favoritesCities}
            />
        </div>

    );
}

const mstp = (state) => ({
    isFetching: getIsFetching(state),
    weatherData: getCityWeatherData(state),
    unit: getUnit(state),
    favoritesCities: getFavoritesCities(state),
})

export default connect(mstp, {
    requestCityWeather, clearFavoritesCities, clearCitiesWeather,
    addFavoriteCityRequest, deleteFavoriteCityRequest,
})(CityWeatherContainer);