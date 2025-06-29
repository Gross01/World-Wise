import {createAsyncThunk} from '@reduxjs/toolkit'
import {COUNTRY_PAGE_URL} from "../../utils/constants";

export const fetchCountry = createAsyncThunk(
    'country/fetchCountry',
    async (cca3, thunkAPI) => {
        try {
            const response = await fetch(COUNTRY_PAGE_URL + cca3, {
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