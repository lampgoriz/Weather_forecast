import {LocalStorageAPI} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";
import {coordObjToString, roundCoordinate} from "../tools/roundCoordinate";
import {addIsFetching, deleteIsFetching} from "./app-reducer";

// thunk creators
export const addFavoriteCityRequest = (cityCoordinate) => (dispatch) => {
    dispatch(addIsFetching());
    const {lat, lon} = roundCoordinate(cityCoordinate);
    LocalStorageAPI.addFavorite(coordObjToString(lat, lon));
    dispatch(addFavorite(coordObjToString(lat, lon)));
    dispatch(deleteIsFetching());
}
export const deleteFavoriteCityRequest = (cityCoordinate) => (dispatch) => {
    dispatch(addIsFetching());
    const {lat, lon} = roundCoordinate(cityCoordinate);
    LocalStorageAPI.deleteFavorite(coordObjToString(lat, lon));
    dispatch(deleteFavorite(coordObjToString(lat, lon)));
    dispatch(deleteIsFetching());
}
export const setFavoritesCitiesRequest = () => (dispatch) => {
    dispatch(addIsFetching());
    dispatch(setFavoritesCities(LocalStorageAPI.getFavorites()));
    dispatch(deleteIsFetching());
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