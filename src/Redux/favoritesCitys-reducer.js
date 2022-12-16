const GET_CITY_WEATHER = 'GET_CITY_WEATHER';

export const getCityWeather = () => ({type: GET_CITY_WEATHER})


const initialState = {
    cities:{
        key: true
    }
}

export const favoritesCitiesReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_CITY_WEATHER:
            return state
        default :
            return state
    }
}