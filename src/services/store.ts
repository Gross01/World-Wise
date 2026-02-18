import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countriesSlice} from "./countries/slice";
import {countrySlice} from "./country-page/slice";
import {searchQuerySlice} from "./search-query/slice";
import {quizQuestions} from "./quiz-questions/slice";
import { useDispatch as dispatchHook, useSelector as selectorHook } from "react-redux";

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

export const store = createStore()

export type RootStore = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useSelector = selectorHook.withTypes<RootStore>()
export const useDispatch = dispatchHook.withTypes<AppDispatch>()
