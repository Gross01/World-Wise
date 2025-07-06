import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countriesSlice} from "./countries/slice";
import {countrySlice} from "./country-page/slice";
import {searchQuerySlice} from "./search-query/slice";
import {quizQuestions} from "./quiz-questions/slice";

const rootReducer = combineReducers({
    countries: countriesSlice.reducer,
    countryPage: countrySlice.reducer,
    searchQuery: searchQuerySlice.reducer,
    quizQuestions: quizQuestions.reducer,
})

export const createStore = () => {
    return configureStore( {
        reducer: rootReducer
    })
}