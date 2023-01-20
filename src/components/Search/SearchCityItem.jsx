import React from "react";
import ToFavoriteBtn from "../FavoritesCities/ToFavoriteBtn";
import {NavLink} from "react-router-dom";
import ToFavoriteBtnContainer from "../FavoritesCities/ToFavoriteBtnContainer";
import {ShowDetailBtn} from "../../common/ShowDetailBtn";

const SearchCityItem = (props) => {

    return (
        <li key={props.lat + props.lon}>
            <p>{props.name}, {props.country}, {props.state}</p>

            <ToFavoriteBtnContainer
                coord={props.coord}
                favoritesCities={props.favoritesCities}
            />
            <ShowDetailBtn lat={props.coord.lat} lon={props.coord.lon}/>
        </li>
    )
}

export default SearchCityItem;