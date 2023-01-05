import {LocalStorageAPI} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";

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

const favoritesCitiesReducer = createSlice({
    name: 'favoritesCities',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favoritesCities.push(action.payload)
        },
        deleteFavorite(state, action) {
            state.favoritesCities.filter(cord => cord !== action.payload)
        },
        setFavoritesCities(state, action) {
            state.favoritesCities = action.payload
        },
        clearFavoritesCities(state) {
            state.favoritesCities = []
        }
    }
});

export const {addFavorite, deleteFavorite, setFavoritesCities, clearFavoritesCities} = favoritesCitiesReducer.actions;
export default favoritesCitiesReducer.reducer;