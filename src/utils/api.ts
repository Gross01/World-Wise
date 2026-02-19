import {COUNTRIES_URL, COUNTRY_PAGE_URL} from "./constants";
import { CountryInfo } from "./types/country-info";
import { MainPageCountryInfo } from "./types/main-page-country-info";


export async function fetchCountryData(cca3: string): Promise<CountryInfo[]> {

    const response = await fetch(COUNTRY_PAGE_URL + cca3, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (!response.ok) {
        throw new Error('Ошибка запроса')
    }

    return await response.json()
}

export async function fetchAllCountries (): Promise<MainPageCountryInfo[]> {
    const response = await fetch(COUNTRIES_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Ошибка запроса')
    }

    return await response.json();
}