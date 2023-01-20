import React from "react";
import {connect} from "react-redux";
import {addFavoriteCityRequest, deleteFavoriteCityRequest} from "../../Redux/favoritesCities-reducer";
import ToFavoriteBtn from "./ToFavoriteBtn";

const ToFavoriteBtnContainer = (props) => {
    return <ToFavoriteBtn {...props}/>
}

let mstp;
export default connect(mstp, {addFavoriteCityRequest, deleteFavoriteCityRequest})(ToFavoriteBtnContainer);