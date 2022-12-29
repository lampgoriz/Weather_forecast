import {createSelector} from "reselect";

const getFavoritesCitiesSelector = (state) => state.favoritesCities.favoritesCities;
export const getFavoritesCities = createSelector(getFavoritesCitiesSelector, (favoritesCities) => favoritesCities);
