import React from "react";
import ToFavoriteBtn from "../FavoritesCities/ToFavoriteBtn";

const SearchCityItem = (props) => {

    return (
        <li key={props.lat + props.lon}>
            <p>{props.name}, {props.country}, {props.state}</p>
            <ToFavoriteBtn
                lat={props.lat}
                lon={props.lon}
                favoritesCities={props.favoritesCities}
                deleteFavoriteCityRequest={props.deleteFavoriteCityRequest}
                addFavoriteCityRequest={props.addFavoriteCityRequest}
            />
            <button>show detail</button>
        </li>
    )
}

export default SearchCityItem;