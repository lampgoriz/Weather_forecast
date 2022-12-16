import React from "react";
import style from './CityWeather.module.css'
import cn from 'classnames'
import {Preloader} from "../../common/Preloader";

const CityWeather = (props) => {

    // if(props.isFetching){
    //     return <Preloader />
    // }

    return (
        <div className={cn('container')}>
            <div className={cn(style.weather__wrapper)}>
                <p className={style.city}>{props.name}</p>
                <p>visibility: {props.visibility}</p>
            </div>
        </div>
    );
}

export default CityWeather;