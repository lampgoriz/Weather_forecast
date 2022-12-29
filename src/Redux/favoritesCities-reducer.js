import {LocalStorageAPI} from "../api/api";

// action types
const ADD_FAVORITE = 'favoritesCities/ADD_FAVORITE';
const DELETE_FAVORITE = 'favoritesCities/DELETE_FAVORITE';
const SET_FAVORITES = 'favoritesCities/SET_FAVORITES';
const CLEAR_FAVORITES = 'favoritesCities/CLEAR_FAVORITES';

//action creators
export const addFavorite = (cityCoordinate) => ({type: ADD_FAVORITE, cityCoordinate});
export const deleteFavorite = (cityCoordinate) => ({type: DELETE_FAVORITE, cityCoordinate});
export const setFavoritesCities = (favCities) => ({type: SET_FAVORITES, favCities});
export const clearFavoritesCities = () => ({type: CLEAR_FAVORITES});

// thunk creators
export const addFavoriteCityRequest = (cityCoordinate) => (dispatch) => {
    LocalStorageAPI.addFavorite(cityCoordinate);
    dispatch(addFavorite(cityCoordinate));
}
export const deleteFavoriteCityRequest = (cityCoordinate) => (dispatch) => {
    LocalStorageAPI.deleteFavorite(cityCoordinate);
    dispatch(deleteFavorite(cityCoordinate));
}
export const setFavoritesCitiesRequest = () => (dispatch) => {
    dispatch(setFavoritesCities(LocalStorageAPI.getFavorites()));
}

const initialState = {
    favoritesCities: []
}

export const favoritesCitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favoritesCities: [...state.favoritesCities, ...action.cityCoordinate]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favoritesCities: state.favoritesCities.filter(cord => cord !== action.cityCoordinate)
            }
        case SET_FAVORITES:
            return {
                ...state,
                favoritesCities: [...action.favCities]
            }
        case CLEAR_FAVORITES:
            return {
                ...state,
                favoritesCities: []
            }
        default :
            return state
    }
}