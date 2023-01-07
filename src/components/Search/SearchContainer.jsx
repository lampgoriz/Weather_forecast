import React, {useEffect} from "react";
import {connect} from "react-redux";
import Search from "./Search";
import {sendSearchCityRequest, updateSearchValue} from "../../Redux/search-reducer";
import {getFavoritesCities} from "../../Redux/favoritesCities-selectors";
import {
    addFavoriteCityRequest,
    deleteFavoriteCityRequest,
    setFavoritesCitiesRequest
} from "../../Redux/favoritesCities-reducer";
import {getSearchedCities, getSearchValue} from "../../Redux/search-selector";

const SearchContainer = (props) => {

    useEffect(() => {
        props.setFavoritesCitiesRequest();
    }, [props.favoritesCities.length])

    // console.log(props.searchedCities);

    return (
        <Search
            searchedCities={props.searchedCities}
            searchValue={props.searchValue}
            sendSearchCityRequest={props.sendSearchCityRequest}
            updateSearchValue={props.updateSearchValue}
            favoritesCities={props.favoritesCities}
            addFavoriteCityRequest={props.addFavoriteCityRequest}
            deleteFavoriteCityRequest={props.deleteFavoriteCityRequest}
        />
    )
}

const mstp = (state) => ({
    searchedCities: getSearchedCities(state),
    searchValue: getSearchValue(state),
    favoritesCities: getFavoritesCities(state),
})

export default connect(mstp, {
    sendSearchCityRequest, updateSearchValue, setFavoritesCitiesRequest,
    addFavoriteCityRequest, deleteFavoriteCityRequest,
})(SearchContainer)