type NativeNameInfo = {
    official: string;
    common: string;
}

type Currency = {
    symbol: string
    name: string
}

type Demonyms = {
    f: string
    m: string
}

type Translation = {
    official: string;
    common: string;
}

export type CountryInfo = {
    name: {
        common: string
        official: string
        nativeName: Record<string, NativeNameInfo>
    }
    tld: string[]
    cca2: string
    ccn3: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: Record<string, Currency>
    idd: {
        root: string;
        suffixes: string[]
    }
    capital: string[]
    altSpellings: string[]
    region: string
    subregion: string
    languages: Record<string, string>
    latlng: number[]
    landlocked: boolean
    borders: string[]
    area: number
    demonyms: Record<string, Demonyms>
    cca3: string
    translations: Record<string, Translation>
    flag: string
    maps: {
        googleMaps: string
        openSteetMaps: string
    }
    population: number
    gini?: Record<number, number>
    fifa?: string
    car: {
        signs: string[]
        side: string
    }
    timezones: string[]
    continents: string[]
    flags: {
        png: string
        svg: string
        alt: string
    }
    coatOfArms: {
        png: string
        svg: string
    }
    startOfWeek: string
    capitalInfo: {
        latlng: number[]
    }
    postalCode: {
        format: null | any
        regex: null | any
    }
}