import {createSelector} from "reselect";

const getFavoritesCitiesSelector = (state) => state.favorites.favoritesCities;
export const getFavoritesCities = createSelector(getFavoritesCitiesSelector, (favoritesCities) => favoritesCities);
