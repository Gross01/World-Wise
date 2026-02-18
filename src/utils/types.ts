type NativeNameInfo = {
    official: string;
    common: string;
}

type Currency = {
    symbol: string
    name: string
}

type CountryInfo = {
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
    unMember: false
    currencies: Record<string, Currency>
}