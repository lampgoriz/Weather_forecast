import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import cn from 'classnames'
import {connect} from "react-redux";
import {setUnitRequest} from "../../Redux/app-reducer";
import {getUnit} from "../../Redux/app-selectors";

const Header = (props) => {
    const setUnit = e => {
        props.setUnitRequest(e.currentTarget.innerHTML)
    }

    return (
        <div className={cn(style.header_wrapper)}>
            <div className={cn('container', style.header_body)}>
                <div className={cn(style.header_nav)}>
                    <NavLink to='/favoritesCities'>Favorites Cities</NavLink>
                    <NavLink to='/cityWeather'>City Weather</NavLink>
                    <NavLink to='/search'>Search</NavLink>
                </div>
                <div className={style.temperature_wrapper}>
                    {
                        props.unit === "C"
                            ? <button onClick={setUnit}>F</button>
                            : <button onClick={setUnit}>C</button>
                    }
                </div>
            </div>
        </div>
    );
}

const mstp = (state) => ({
    unit: getUnit(state),
})

export default connect(mstp, {setUnitRequest})(Header);