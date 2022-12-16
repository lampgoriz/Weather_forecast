import React from "react";
import {connect} from "react-redux";
import FavoritesCities from "./FavoritesCities";

const FavoritesCitiesContainer = (props) => {

    return (
        <FavoritesCities />
    );
}

const mstp = (state) => ({

})

export default connect(mstp, {})(FavoritesCitiesContainer);