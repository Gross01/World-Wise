import {createAsyncThunk} from '@reduxjs/toolkit'
import {COUNTRY_PAGE_URL} from "../../utils/constants";

export const fetchCountry = createAsyncThunk(
    'country/fetchCountry',
    async (countryName, thunkAPI) => {
        try {
            const response = await fetch(COUNTRY_PAGE_URL + countryName, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (!response.ok) {
                thunkAPI.rejectWithValue('Ошибка запроса')
            }

            return await response.json()
        } catch (e) {
            thunkAPI.rejectWithValue(e.message)
        }
    }
)