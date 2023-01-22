import React from "react";
import style from './CityWeather.module.css'
import cn from 'classnames'
import ToFavoriteBtnContainer from "../FavoritesCities/ToFavoriteBtnContainer";
import ShowDetailBtnContainer from "../../common/ShowDetailBtnContainer";

const CityWeather = ({weatherData, unit}) => {

    const roundTemperature = (t) => Math.round(t);

    return (
        <div className={cn(style.weather__wrapper)}>
            <p className={style.city}>{weatherData.name}, {weatherData.country}</p>
            <p>Temperature: {roundTemperature(weatherData.temperature)} °{unit}</p>
            <p>Feels like: {roundTemperature(weatherData.feels_like)} °{unit}</p>
            <p>Max: {roundTemperature(weatherData.max)} °{unit}, Min: {roundTemperature(weatherData.min)} °{unit}</p>
            <p>Clouds: {weatherData.clouds} </p>
            {weatherData.visibility && <p>Visibility: {weatherData.visibility}</p>}
            {weatherData.humidity && <p>Humidity: {weatherData.humidity}</p>}
            {weatherData.pressure && <p>Pressure: {weatherData.pressure}</p>}
            {weatherData.speed && <p>Wind speed: {weatherData.speed}</p>}
            {weatherData.deg && <p>Wind deg: {weatherData.deg}</p>}
            <ToFavoriteBtnContainer
                coord={weatherData.coord}
            />
            {!weatherData.visibility && <ShowDetailBtnContainer lat={weatherData.coord.lat} lon={weatherData.coord.lon}/>}
        </div>
    );
}

export default CityWeather;