import React from "react";
import {connect} from "react-redux";
import {updateCityToFind} from "../Redux/cityWeather-reducer";
import {ShowDetailBtn} from "./ShowDetailBtn";

const ShowDetailBtnContainer = (props) => {

    return <ShowDetailBtn
        updateCityToFind={props.updateCityToFind}
        lat={props.lat}
        lon={props.lon}
    />
}

let mstp;
export default connect(mstp,{updateCityToFind})(ShowDetailBtnContainer)