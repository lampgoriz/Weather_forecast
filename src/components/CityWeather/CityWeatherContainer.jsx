import {connect} from "react-redux";
import CityWeather from "./CityWeather";
import React, {useEffect, useState} from "react";
import {requestCityWeather} from "../../Redux/cityWeather-reducer";
import {Preloader} from "../../common/Preloader";
import {getCityName, getVisibility} from "../../Redux/cityWeather-selectors";
import {getIsFetching} from "../../Redux/app-selectors";

const CityWeatherContainer = (props) => {

    useEffect(()=>{
        const lat = '50.4333', lon = '30.5167';
        const APIkey = 'b576b32c49d545641ea3b96c463ad641';
        props.requestCityWeather(lat, lon, APIkey);
    }, [props.visibility]);



    if(props.isFetching){
        return <Preloader />
    }

    return (
        <CityWeather
            visibility={props.visibility}
            name={props.name}
            // isFetching={props.isFetching}
        />
    );
}

const mstp = (state) => ({
    visibility: getVisibility(state),
    name: getCityName(state),
    isFetching: getIsFetching(state),
})

export default connect(mstp, {requestCityWeather})(CityWeatherContainer);