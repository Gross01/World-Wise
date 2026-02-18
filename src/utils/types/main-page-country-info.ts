import { CountryInfo } from "./country-info";

type PickedProperties = 'flags' 
                        | 'name' 
                        | 'cca3' 
                        | 'currencies' 
                        | 'idd' 
                        | 'capital' 
                        | 'languages'
                        | 'area'
                        | 'population'
                        | 'continents'

export type MainPageCountryInfo = Pick<CountryInfo, PickedProperties>