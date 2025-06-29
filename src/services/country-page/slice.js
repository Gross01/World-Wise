import {createSlice} from "@reduxjs/toolkit";
import {fetchCountry} from "./thunk";

const initialState = {
    loading: false,
    error: false,
    item: null,
}

export const countrySlice = createSlice({
    name: 'country-page',
    initialState,
    reducers: {
        removeCountry: (state) => {
            state.item = null
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCountry.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.loading = false
                state.item = action.payload
            })
            .addCase(fetchCountry.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export const {removeCountry} = countrySlice.actions
