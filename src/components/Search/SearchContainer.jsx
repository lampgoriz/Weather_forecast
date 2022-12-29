import React, {useEffect} from "react";
import {connect} from "react-redux";
import Search from "./Search";
import {sendSearchCityRequest, updateSearchValue} from "../../Redux/search-reducer";
import {getFavoritesCities} from "../../Redux/favoritesCities-selectors";
import {
    addFavoriteCityRequest, clearFavoritesCities,
    deleteFavoriteCityRequest,
    setFavoritesCitiesRequest
} from "../../Redux/favoritesCities-reducer";
import {getSearchedCities, getSearchValue} from "../../Redux/search-selector";
import {clearCitiesWeather} from "../../Redux/cityWeather-reducer";

const SearchContainer = (props) => {

    useEffect(() => {
        props.setFavoritesCitiesRequest();

        return () => {
            props.clearFavoritesCities();
            props.clearCitiesWeather();
        };
    }, [props.searchedCities, props.favoritesCities.length])

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
    addFavoriteCityRequest, deleteFavoriteCityRequest, clearFavoritesCities,
    clearCitiesWeather
})(SearchContainer)