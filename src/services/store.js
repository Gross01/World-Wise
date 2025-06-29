import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countriesSlice} from "./countries/slice";
import {countrySlice} from "./country-page/slice";


const rootReducer = combineReducers({
    countries: countriesSlice.reducer,
    countryPage: countrySlice.reducer,
})

export const createStore = () => {
    return configureStore( {
        reducer: rootReducer
    })
}