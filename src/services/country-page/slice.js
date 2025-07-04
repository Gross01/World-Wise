import {createSlice} from "@reduxjs/toolkit";
import {fetchCountry} from "./thunk";

const initialState = {
    loading: false,
    error: false,
    item: null,
    compare: false,
    compareItem: null
}

export const countrySlice = createSlice({
    name: 'country-page',
    initialState,
    reducers: {
        removeCountry: (state) => {
            state.item = null
        },
        setCompare: (state, action) => {
            state.compare = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCountry.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.loading = false
                if (state.compare) {
                    state.compareItem = action.payload
                } else {
                    state.item = action.payload
                }
            })
            .addCase(fetchCountry.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export const {removeCountry, setCompare} = countrySlice.actions
