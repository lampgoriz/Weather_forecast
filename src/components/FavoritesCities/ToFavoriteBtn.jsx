import React from "react";

const ToFavoriteBtn = (props) => {
    const cord = `${props.lat},${props.lon}`;

    //FIX: different coordinate values come in search response and favoritesCities response
    const checkFav = () => {
        let res;
        props.favoritesCities.map(city => {
            if (res === true) {
                return res
            }
            if (city === cord) {
                return res = true
            } else return false
        })
        return res;
    }

    return (
        <div>{
            checkFav()
                ? <button
                    onClick={() => props.deleteFavoriteCityRequest(cord)}>
                    delete favorite
                </button>
                : <button
                    onClick={() => props.addFavoriteCityRequest(cord)}>
                    add favorite
                </button>
        }
        </div>
    )
}
export default ToFavoriteBtn;