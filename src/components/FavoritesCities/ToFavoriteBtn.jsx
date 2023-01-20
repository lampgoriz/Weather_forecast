import React from "react";
import {coordObjToString} from "../../tools/roundCoordinate";

const ToFavoriteBtn = (props) => {

     const checkFav = () => {
        let res = false;
        for (const city in props.favoritesCities) {
            if (res === true) {
                return res
            }
            if (city === coordObjToString(props.coord.lat, props.coord.lon)) {
                return res = true
            }
        }
        return res;
    }

    return (
        <div>{
            checkFav()
                ? <button
                    onClick={() => props.deleteFavoriteCityRequest(props.coord)}>
                    delete favorite
                </button>
                : <button
                    onClick={() => props.addFavoriteCityRequest(props.coord)}>
                    add favorite
                </button>
        }
        </div>
    )
}
export default ToFavoriteBtn;