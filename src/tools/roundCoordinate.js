export const roundCoordinate = ({lat, lon}) => {
    lat = Math.round(lat * 100) / 100;
    lon = Math.round(lon * 100) / 100;
    return {lat, lon};
}

export const coordObjToString = (lat, lon) => {
    return `${lat},${lon}`;
}

export const coordStringToObj = (coordinate) => {
    let [lat, lon] = coordinate.split(',');
    return {lat, lon};
}