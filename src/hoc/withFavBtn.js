import React, {Component} from "react";
import {connect} from "react-redux";
import {addFavoriteCityRequest, deleteFavoriteCityRequest} from "../Redux/favoritesCities-reducer";

// let mstp = (state) => {
//     return {}
// }

const witFavBtn = Component => (...props) => (
    <Component {...props}/>
)

export default connect({}, {addFavoriteCityRequest, deleteFavoriteCityRequest})(witFavBtn);