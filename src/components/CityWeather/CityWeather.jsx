import React from "react";
import style from './CityWeather.module.css'
import cn from 'classnames'

const CityWeather = (props) => {

    return (
        <div className={cn(style.weather__wrapper)}>
            <p className={style.city}>{props.weatherData.name}</p>
            <p>visibility: {props.weatherData.visibility}</p>
            <p>temperature: {props.weatherData.main.temp} {props.unit}</p>
        </div>
    );
}

export default CityWeather;