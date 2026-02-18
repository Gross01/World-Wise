import {createSlice} from "@reduxjs/toolkit";
import {fetchCountries} from "./thunk";

type TInitialState = {
    loading: boolean;
    error: boolean;
    items: null | any;
    filteredItems: null | any
}

const initialState: TInitialState = {
    loading: false,
    error: false,
    items: null,
    filteredItems: null
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
            sortAndFilterCountries: (state, action) => {
                const sortedCountries = [...state.items].sort((a, b) => {
                    return a.name.common.localeCompare(b.name.common)
                })

                state.filteredItems = action.payload 
                    ?   sortedCountries.filter(country => 
                            country.name.common.toLowerCase().includes(action.payload.toLowerCase())
                        )
                    :   sortedCountries
            }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false
                state.items = [...action.payload].sort((a, b) => {
                    return a.name.common.localeCompare(b.name.common)
                })
                state.filteredItems = [...action.payload].sort((a, b) => {
                    return a.name.common.localeCompare(b.name.common)
                })
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false
                state.error = true
            })
    }
})

export const {sortAndFilterCountries} = countriesSlice.actions

