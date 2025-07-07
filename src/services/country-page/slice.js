import {createSlice} from "@reduxjs/toolkit";
import {fetchCompareCountry, fetchCountry} from "./thunk";

const initialState = {
    countryInfo: {
        loading: false,
        error: false,
        item: null
    },
    compareCountryInfo: {
        loading: false,
        error: false,
        item: null
    }
}

export const countrySlice = createSlice({
    name: 'country-page',
    initialState,
    reducers: {
        removeCountry: (state) => {
            state.compareCountryInfo.item = null
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCountry.pending, (state) => {
                state.countryInfo.loading = true
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.countryInfo.loading = false
                state.countryInfo.item = action.payload
            })
            .addCase(fetchCountry.rejected, (state) => {
                state.compareCountryInfo.loading = false
                state.compareCountryInfo.error = true
            })
            .addCase(fetchCompareCountry.pending, (state) => {
                state.compareCountryInfo.loading = true
            })
            .addCase(fetchCompareCountry.fulfilled, (state, action) => {
                state.compareCountryInfo.loading = false
                state.compareCountryInfo.item = action.payload
            })
            .addCase(fetchCompareCountry.rejected, (state) => {
                state.compareCountryInfo.loading = false
                state.compareCountryInfo.error = true
            })
    }
})

export const {removeCountry} = countrySlice.actions
