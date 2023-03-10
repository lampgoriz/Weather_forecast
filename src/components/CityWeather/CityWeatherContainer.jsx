import {connect} from "react-redux";
import CityWeather from "./CityWeather";
import React, {useEffect} from "react";
import {requestCityWeather} from "../../Redux/cityWeather-reducer";
import {Preloader} from "../../common/Preloader";
import {getCityToFind, getCityWeatherData} from "../../Redux/cityWeather-selectors";
import {getIsFetching, getUnit} from "../../Redux/app-selectors";
import {
    addFavoriteCityRequest,
    deleteFavoriteCityRequest, setFavoritesCitiesRequest
} from "../../Redux/favoritesCities-reducer";
import style from './CityWeather.module.css'

const CityWeatherContainer = (props) => {

    useEffect(() => {
        props.setFavoritesCitiesRequest();
        props.requestCityWeather(props.cityToFind);
    }, [props.unit]);

    if(!props.cityToFind){
        return <h3>Chose city from favorites or search</h3>
    }
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
        coord: {lat: props.weatherData.coord.lat, lon: props.weatherData.coord.lon}
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
    cityToFind: getCityToFind(state),
})

export default connect(mstp, {
    requestCityWeather, addFavoriteCityRequest, deleteFavoriteCityRequest,
    setFavoritesCitiesRequest,
})(CityWeatherContainer);