// action types
const ADD_IS_FETCHING = 'app/ADD_IS_FETCHING';
const DELETE_IS_FETCHING = 'app/DELETE_IS_FETCHING';
const SET_INITIALIZE = 'app/SET_INITIALIZE';

//action creators
export const addIsFetching = () => ({type: ADD_IS_FETCHING});
export const deleteIsFetching = () => ({type: DELETE_IS_FETCHING});
export const setInitialize = () => ({type: SET_INITIALIZE})

//thunk creators


const initialState = {
    isFetching: false,
    isInitialized: false
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
        default :
            return state
    }
}