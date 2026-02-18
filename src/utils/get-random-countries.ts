import {COUNTRIES_WITHOUT_QUIZ} from './constants'

export function shuffle (arr: any[]) {
    const result = arr.slice()

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result
}

export function getRandomCountries(countries: any, currentCountry: any, count = 3) {
    const filtered = countries.filter(
        (country: any) =>
            country.name.common !== currentCountry.name.common &&
            !COUNTRIES_WITHOUT_QUIZ.includes(currentCountry.name.common) &&
            Array.isArray(country.capital) && country.capital.length > 0
    );

    return shuffle(filtered).slice(0, count);
}

