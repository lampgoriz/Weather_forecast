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
import {requestCityWeather} from "../../Redux/cityWeather-reducer";
import {compose} from "redux";

const SearchContainer = (props) => {

    useEffect(() => {
        props.setFavoritesCitiesRequest();
    }, [props.favoritesCities.length])

    return (
        <Search
            searchedCities={props.searchedCities}
            searchValue={props.searchValue}
            sendSearchCityRequest={props.sendSearchCityRequest}
            updateSearchValue={props.updateSearchValue}
            favoritesCities={props.favoritesCities}
            requestCityWeather={props.requestCityWeather}
        />
    )
}

const mstp = (state) => ({
    searchedCities: getSearchedCities(state),
    searchValue: getSearchValue(state),
    favoritesCities: getFavoritesCities(state),
})

export default compose(
    connect(mstp, {
        sendSearchCityRequest, updateSearchValue, setFavoritesCitiesRequest,
        requestCityWeather
    })
)(SearchContainer)