import React from "react";
import SearchCityItem from "./SearchCityItem";
import {roundCoordinate} from "../../tools/roundCoordinate";

const Search = (props) => {

    let searchList;


    if (props.searchedCities && props.searchedCities.length > 0) {
        searchList = props.searchedCities.map(r => {
            return <SearchCityItem
                key={r.lat + r.lon}
                name={r.name}
                country={r.country}
                state={r.state}
                coord={roundCoordinate({lat: r.lat, lon: r.lon})}
                // coord={({lat: r.lat, lon: r.lon})}
                requestCityWeather={props.requestCityWeather}
            />
        })
    }
    console.log(searchList);
    return (
        <div>
            <div>
                <input
                    onChange={e => props.updateSearchValue(e.currentTarget.value)}
                    value={props.searchValue}
                    type="search"/>
                <button onClick={() => props.sendSearchCityRequest(props.searchValue)}>Search</button>
            </div>
            <div>
                <ul>
                    {searchList ? searchList : null}
                </ul>
            </div>
        </div>
    )
}

export default Search;