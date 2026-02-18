import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchCountryData} from "../../utils/api";

export const fetchCountry = createAsyncThunk(
    'country/fetchCountry',
    //@ts-ignore
    (cca3, thunkAPI) => fetchCountryData(cca3, thunkAPI)
)

export const fetchCompareCountry = createAsyncThunk(
    'country/fetchCompareCountry',
    //@ts-ignore
    (cca3, thunkAPI) => fetchCountryData(cca3, thunkAPI)
)

