import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchAllCountries} from "../../utils/api";
import { MainPageCountryInfo } from "../../utils/types/main-page-country-info";

export const fetchCountries = createAsyncThunk<MainPageCountryInfo[], void>(
    'countries/fetch',
    () => fetchAllCountries()
)