import {COUNTRIES_URL, COUNTRY_PAGE_URL} from "./constants";

//@ts-ignore
export async function fetchCountryData(cca3: string, thunkAPI) {
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
        thunkAPI.rejectWithValue((e as Error).message)
    }
}

//@ts-ignore
export async function fetchAllCountries (_: any, thunkAPI) {
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
        thunkAPI.rejectWithValue((e as Error).message)
    }
}