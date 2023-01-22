import React from "react";
import {connect} from "react-redux";
import {addFavoriteCityRequest, deleteFavoriteCityRequest} from "../../Redux/favoritesCities-reducer";
import ToFavoriteBtn from "./ToFavoriteBtn";
import {getFavoritesCities} from "../../Redux/favoritesCities-selectors";

const ToFavoriteBtnContainer = (props) => {
    return <ToFavoriteBtn {...props}/>
}

const mstp = (state) => ({
    favoritesCities: getFavoritesCities(state),
})

export default connect(mstp, {addFavoriteCityRequest, deleteFavoriteCityRequest})(ToFavoriteBtnContainer);