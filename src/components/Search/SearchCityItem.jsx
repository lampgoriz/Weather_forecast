import React from "react";
import ToFavoriteBtnContainer from "../FavoritesCities/ToFavoriteBtnContainer";
import ShowDetailBtnContainer from "../../common/ShowDetailBtnContainer";

const SearchCityItem = (props) => {

    return (
        <li key={props.lat + props.lon}>
            <p>{props.name}, {props.country}, {props.state}</p>

            <ToFavoriteBtnContainer
                coord={props.coord}
            />
            <ShowDetailBtnContainer lat={props.coord.lat} lon={props.coord.lon}/>
        </li>
    )
}

export default SearchCityItem;