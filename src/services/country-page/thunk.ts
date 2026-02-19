import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchCountryData} from "../../utils/api";
import { CountryInfo } from '../../utils/types/country-info';

export const fetchCountry = createAsyncThunk <CountryInfo[], string>(
    'country/fetchCountry',
    (cca3, _) => fetchCountryData(cca3)
)

export const fetchCompareCountry = createAsyncThunk <CountryInfo[], string>(
    'country/fetchCompareCountry',
    (cca3, _) => fetchCountryData(cca3)
)

