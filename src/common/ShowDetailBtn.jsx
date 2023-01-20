import React from "react";
import style from "./Preloader.module.css"
import {NavLink} from "react-router-dom";

export const ShowDetailBtn = (props) => {

    return (
        <NavLink
            to={`/cityWeather`}
            onClick={() => props.updateCityToFind({lat: props.lat, lon: props.lon})}
        >show detail</NavLink>
    )
}