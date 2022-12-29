// action types
import {GeocodingAPI} from "../api/api";

const UPDATE_SEARCH_VALUE = 'search/UPDATE_SEARCH_VALUE';
const SET_SEARCH_RESULTS = 'search/SET_SEARCH_RESULTS'

//action creators
export const updateSearchValue = (newSearchValue) => ({type: UPDATE_SEARCH_VALUE, newSearchValue});
export const setSearchResults = (searchResults) => ({type: SET_SEARCH_RESULTS, searchResults});


//thunk creators
export const sendSearchCityRequest = (cityName) => async (dispatch) => {
    const response = await GeocodingAPI.searchCity(cityName);
    if (response.status === 200) {
        dispatch(setSearchResults(response.data));
    }
}


const initialState = {
    searchValue: '',
    searchResults: [],
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.newSearchValue,
            }
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.searchResults,
            }
        default :
            return state
    }
}