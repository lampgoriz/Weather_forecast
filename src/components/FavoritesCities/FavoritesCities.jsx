import React from "react";
import CityWeather from "../CityWeather/CityWeather";
import style from './favoriteCities.module.css'

const FavoritesCities = (props) => {

    const cities = [];
    if (props.weatherData) {
        for (const city in props.weatherData) {
            let key = props.weatherData[city];

            let weatherData = {
                name: key.name,
                country: key.sys.country,
                temperature: key.main.temp,
                feels_like: key.main.feels_like,
                max: key.main.temp_max,
                min: key.main.temp_min,
                clouds: key.clouds.all,
                coord: {lat: key.coord.lat, lon: key.coord.lon}
            }

            cities.push(<CityWeather
                key={key.id}
                weatherData={weatherData}
                unit={props.unit}
            />)
        }
    }

    return (
        <div className={style.favorites_cities}>
            {cities.length >= 1 ? cities : <h3>NO FAVORITES CITIES</h3>}
        </div>
    );
}

export default FavoritesCities;