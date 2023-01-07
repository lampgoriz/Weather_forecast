export const roundCoordinate = ({lat, lon}) => {
    lat = Math.round(lat * 1000) / 1000;
    lon = Math.round(lon * 1000) / 1000;
    return {lat, lon};
}

export const coordObjToString = (lat, lon) => {
    return `${lat},${lon}`;
}

export const coordStringToObj = (coordinate) => {
    let [lat, lon] = coordinate.split(',');
    return {lat, lon};
}