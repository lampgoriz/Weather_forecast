import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import cn from 'classnames'

const Header = (props) => {
    return (
        <div className={cn( style.header_wrapper)}>
            <div className={cn('container', style.header_body)}>
                <div className={cn(style.header_nav)}>
                    <NavLink to='/favoritesCities'>Favorites Cities</NavLink>
                    <NavLink to='/cityWeather'>City Weather</NavLink>
                </div>
                <div className={style.temperature_wrapper}>
                    <button>C</button>
                    <button>F</button>
                </div>
            </div>
        </div>
    );
}

export default Header;