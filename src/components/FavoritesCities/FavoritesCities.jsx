import React from "react";
import CityWeather from "../CityWeather/CityWeather";
import style from './favoriteCities.module.css'

const FavoritesCities = (props) => {

    let cities = [];
    if (props.weatherData) {
        for (const city in props.weatherData) {
            // console.log(props.weatherData[city]);
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
                favoritesCities={props.favoritesCities}
                unit={props.unit}
                addFavoriteCityRequest={props.addFavoriteCityRequest}
                deleteFavoriteCityRequest={props.deleteFavoriteCityRequest}
            />)
        }
    }

    return (
        <div className={style.favorites_cities}>
            {cities || 'NO FAVORITES CITIES'}
        </div>
    );
}

export default FavoritesCities;