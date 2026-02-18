import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchAllCountries} from "../../utils/api";

export const fetchCountries = createAsyncThunk(
    'countries/fetch',
    (_, thunkAPI) => fetchAllCountries(_, thunkAPI)
)