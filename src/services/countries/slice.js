import {createSlice} from "@reduxjs/toolkit";
import {fetchCountries} from "./thunk";

const initialState = {
    loading: false,
    error: false,
    items: null,
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false
                state.error = true
            })
    }
})

