import React from "react";
import CityWeather from "../CityWeather/CityWeather";

const FavoritesCities = (props) => {

    let cities;
    if (props.weatherData && props.weatherData.length > 0) {
        cities = props.weatherData.map(w => {
            return <CityWeather key={w.id} weatherData={w} unit={props.unit}/>
        });
    }


    return (
        <div>
            {cities || 'NO FAVORITES CITIES'}
        </div>
    );
}

export default FavoritesCities;