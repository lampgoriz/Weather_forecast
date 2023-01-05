import React from "react";
import CityWeather from "../CityWeather/CityWeather";
import style from './favoriteCities.module.css'

const FavoritesCities = (props) => {

    let cities;
    if (props.weatherData && props.weatherData.length > 0) {
        cities = props.weatherData.map(w => {
            let weatherData = {
                name: w.name,
                country: w.sys.country,
                temperature: w.main.temp,
                feels_like: w.main.feels_like,
                max: w.main.temp_max,
                min: w.main.temp_min,
                clouds: w.clouds.all,
                lat: w.coord.lat,
                lon: w.coord.lon,
            }

            return <CityWeather
                key={w.id}
                weatherData={weatherData}
                favoritesCities={props.favoritesCities}
                unit={props.unit}/>
        });
    }

    return (
        <div className={style.favorites_cities}>
            {cities || 'NO FAVORITES CITIES'}
        </div>
    );
}

export default FavoritesCities;