import {createSlice} from "@reduxjs/toolkit";
import {getRandomCountries, shuffle} from "../../utils/get-random-countries";
import {formatNumber} from "../../utils/format-number";
import {CONTINENTS, DEALING_CODES} from "../../utils/constants";

type Question = {
    question: string,
    answer: string,
    options: string[]
}

type TInitialState = {
    items: Question[]
}

const initialState: TInitialState = {
    items: []
};

const getCurrency = (countryInfo: any) => {
    const name = countryInfo?.currencies[Object.keys(countryInfo.currencies)[0]]?.name.split(' ').at(-1)
    const symbol = countryInfo?.currencies[Object.keys(countryInfo.currencies)[0]]?.symbol
    return `${name} - ${symbol}`
}

const getLanguage = (countryInfo: any) => {
    return countryInfo.languages[Object.keys(countryInfo.languages)[0]]
}

export const quizQuestions = createSlice({
    name: 'quizQuestions',
    initialState,
    reducers: {
        createQuestions: (state, action) => {
            const [countryInfo, countries] = action.payload

            const questions = []
            const capitals = getRandomCountries(countries, countryInfo).map((country: any) => country.capital[0])
            
            questions.push(
                {
                    question: `Name the capital of ${countryInfo.name.common}`,
                    answer: countryInfo.capital[0],
                    options: shuffle([...capitals, countryInfo.capital[0]])
                }
            )

            const shuffledContinents = shuffle(CONTINENTS.filter((continent: string) => continent !== countryInfo.continents[0]))
            const continents = shuffledContinents.slice(0, 3)
            questions.push(
                {
                    question: `On which continent is ${countryInfo.name.common} located?`,
                    answer: countryInfo.continents[0],
                    options: shuffle([...continents, countryInfo.continents[0]])
                }
            )

            const dealingCodes = shuffle(DEALING_CODES)
                                    .filter((code: string) => code !== countryInfo.idd.root)
                                    .slice(0, 3)
            questions.push(
                {
                    question: ` What is the international dialing code of ${countryInfo.name.common}?`,
                    answer: countryInfo.idd.root,
                    options: shuffle([...dealingCodes, countryInfo.idd.root])
                }
            )

            const populations = getRandomCountries(countries, countryInfo).map((country: any) => formatNumber(country.population))
            questions.push(
                {
                    question: `Population of ${countryInfo.name.common} is?`,
                    answer: formatNumber(countryInfo.population),
                    options: shuffle([...populations, formatNumber(countryInfo.population)])
                }
            )

            const area = getRandomCountries(countries, countryInfo).map((country: any) => `${formatNumber(country.area)} km²`)
            questions.push(
                {
                    question: `Area of ${countryInfo.name.common} is?`,
                    answer: `${formatNumber(countryInfo.area)} km²`,
                    options: shuffle([...area,  `${formatNumber(countryInfo.area)} km²`])
                }
            )

            let currencies = Array.from(new Set(countries.map((country: any) => getCurrency(country))))
            currencies = shuffle(currencies.filter(curr => curr !== getCurrency(countryInfo))).slice(0, 3)
            questions.push(
                {
                    question: `Currency of ${countryInfo.name.common} is?`,
                    answer: getCurrency(countryInfo),
                    options: shuffle([...currencies, getCurrency(countryInfo)])
                }
            )

            let languages = Array.from(new Set(countries.map((country: any) => getLanguage(country))))
            languages = shuffle(languages.filter(lang => lang !== getLanguage(countryInfo))).slice(0, 3)
            questions.push(
                {
                    question: `Main language in ${countryInfo.name.common} is?`,
                    answer: getLanguage(countryInfo),
                    options: shuffle([...languages, getLanguage(countryInfo)])
                }
            )

            state.items = questions
        },
        deleteQuestions: (state) => {
            state.items = []
        }
    }
})

export const {createQuestions, deleteQuestions} = quizQuestions.actions

