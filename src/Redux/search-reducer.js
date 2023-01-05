import {GeocodingAPI} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";

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

const searchReducer = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        }
    },
})

export const {updateSearchValue, setSearchResults} = searchReducer.actions;
export default searchReducer.reducer;