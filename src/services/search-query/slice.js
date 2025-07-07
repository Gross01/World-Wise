import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

export const searchQuerySlice = createSlice({
    name: "searchQuery",
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setSearchQuery} = searchQuerySlice.actions;