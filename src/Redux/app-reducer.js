// action types
import {LocalStorageAPI} from "../api/api";

const ADD_IS_FETCHING = 'app/ADD_IS_FETCHING';
const DELETE_IS_FETCHING = 'app/DELETE_IS_FETCHING';
const SET_INITIALIZE = 'app/SET_INITIALIZE';
const GET_UNIT = 'app/GET_UNIT';
const SET_UNIT = 'app/SET_UNIT';

//action creators
export const addIsFetching = () => ({type: ADD_IS_FETCHING});
export const deleteIsFetching = () => ({type: DELETE_IS_FETCHING});
export const setInitialize = () => ({type: SET_INITIALIZE});
export const setUnit = (unit) => ({type: SET_UNIT, unit});


//thunk creators
export const setUnitRequest = (unit) => (dispatch) => {
    LocalStorageAPI.setUnit(unit);
    dispatch(setUnit(unit));
}
export const setInitializeRequest = () => (dispatch) => {
    dispatch(setUnit(LocalStorageAPI.getUnit()));
    dispatch(setInitialize());
}


const initialState = {
    isFetching: false,
    isInitialized: false,
    unit: '',
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IS_FETCHING:
            return {
                ...state,
                isFetching: true,
            }
        case DELETE_IS_FETCHING:
            return {
                ...state,
                isFetching: false,
            }
        case SET_INITIALIZE:
            return {
                ...state,
                isInitialized: true,
            }
        case SET_UNIT:
            return {
                ...state,
                unit: action.unit,
            }
        default :
            return state
    }
}