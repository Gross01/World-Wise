import {createAsyncThunk} from "@reduxjs/toolkit";
import {COUNTRIES_URL} from "../../utils/constants";

export const fetchCountries = createAsyncThunk(
    'countries/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(COUNTRIES_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                thunkAPI.rejectWithValue('Ошибка запроса')
            }

            return await response.json();
        } catch (e) {
            thunkAPI.rejectWithValue(e.message)
        }
    }
)