import {LocalStorageAPI} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";
import {coordObjToString, roundCoordinate} from "../tools/roundCoordinate";

// thunk creators
export const addFavoriteCityRequest = (cityCoordinate) => (dispatch) => {
    const {lat, lon} = roundCoordinate(cityCoordinate);
    LocalStorageAPI.addFavorite(coordObjToString(lat, lon));
    dispatch(addFavorite(coordObjToString(lat, lon)));
}
export const deleteFavoriteCityRequest = (cityCoordinate) => (dispatch) => {
    const {lat, lon} = roundCoordinate(cityCoordinate);
    LocalStorageAPI.deleteFavorite(coordObjToString(lat, lon));
    dispatch(deleteFavorite(coordObjToString(lat, lon)));
}
export const setFavoritesCitiesRequest = () => (dispatch) => {
    dispatch(setFavoritesCities(LocalStorageAPI.getFavorites()));
}

const initialState = {
    favoritesCities: {}
}

const favoritesCitiesReducer = createSlice({
    name: 'favoritesCities',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favoritesCities[action.payload] = action.payload
        },
        deleteFavorite(state, action) {
            delete state.favoritesCities[action.payload]
        },
        setFavoritesCities(state, action) {
            state.favoritesCities = action.payload
        },
    }
});

export const {addFavorite, deleteFavorite, setFavoritesCities} = favoritesCitiesReducer.actions;
export default favoritesCitiesReducer.reducer;