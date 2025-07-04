import React from 'react';
import styles from "./CountryCard.module.css";
import InfoBlock from "../../UI/info-block/InfoBlock";
import {checkProperty} from "../../utils/check-property";
import {safeObjectValues} from "../../utils/safe-object-values";
import {Link, useParams, useSearchParams} from "react-router-dom";
import Map from "../map/Map";
import BackButton from "../../UI/back-button/BackButton";
import {formatNumber} from '../../utils/format-number'

const CountryCard = ({countryInfo, compareHandler}) => {

    const [query] = useSearchParams()
    const withQuery = query.get('with')
    const params = useParams()

    if (countryInfo) {
        countryInfo = countryInfo[0]
    }

    const currency = countryInfo?.currencies
        ? countryInfo.currencies[Object.keys(countryInfo.currencies)[0]]
        : null;

    const timezones = countryInfo?.timezones.length > 1
        ? `${countryInfo?.timezones[0]} to ${countryInfo?.timezones[countryInfo?.timezones.length - 1]}`
        : countryInfo?.timezones[0]

    return (
        <>
            <img className={styles.flag} src={countryInfo?.flags.png} alt={countryInfo?.flags.alt}/>
            <h2 className={styles.title}>{countryInfo?.name.common}</h2>
            <h3 className={styles.subtitle}>Oficially: {countryInfo?.name.official}</h3>

            <div className={styles.countryInfo}>
                <div className={styles.asideBlock}>
                    <InfoBlock caption='Capital' text={checkProperty(countryInfo.capital)}/>
                    <div className='flex gap'>
                        <InfoBlock caption='Region' text={checkProperty(countryInfo.region)}/>
                        <InfoBlock caption='Subregion' text={checkProperty(countryInfo.subregion)}/>
                    </div>
                    <button className={styles.button} type='button' onClick={compareHandler}>Compare</button>
                    <InfoBlock caption='Currency' text={checkProperty(currency, `${currency?.name} ${currency?.symbol}`)}/>
                    <div className='flex gap'>
                        <InfoBlock caption='Language' text={checkProperty(countryInfo.languages, safeObjectValues(countryInfo.languages)[0] )}/>
                        <InfoBlock caption='Calling Code' text={checkProperty(countryInfo.idd.root)}/>
                    </div>

                    <InfoBlock caption='Borders' text={checkProperty(countryInfo.borders, '')}>
                        {countryInfo.borders &&
                            countryInfo.borders.map((border) => {
                                return <Link key={border} className={styles.link} to={`/countries/${border}`}>{border}</Link>
                            })}
                    </InfoBlock>
                    <Map latlng={countryInfo?.latlng}/>
                </div>
                <div className={styles.asideBlock}>
                    <InfoBlock caption='Population' text={checkProperty(countryInfo.population, formatNumber(countryInfo.population))}/>
                    <div className={'flex gap'}>
                        <InfoBlock caption='Area' text={checkProperty(countryInfo.area, `${formatNumber(countryInfo.area)} km²`)}/>
                        <InfoBlock caption='Independent' text={countryInfo.independent ? 'Yes' : 'No'}/>
                    </div>
                    <button className={styles.button} type='button'>Take quiz</button>
                    <div className={'flex gap'}>
                        <InfoBlock caption='Continent' text={checkProperty(countryInfo.continents, countryInfo.continents.join(', '))}/>
                        <InfoBlock caption='Demonym' text={checkProperty(countryInfo.demonyms.eng.f)}/>
                    </div>
                    <div className={'flex gap'}>
                        <InfoBlock caption='Country Code' text={checkProperty(countryInfo.cca3)}/>
                        <InfoBlock caption='FIFA code' text={checkProperty(countryInfo.fifa)}/>
                    </div>
                    <InfoBlock caption='Timezones' text={timezones}/>
                    <InfoBlock caption='Coat Of Arms' text={checkProperty(countryInfo.coatOfArms, '')} extraStyles={{maxHeight: '200px'}}>
                        <img src={countryInfo.coatOfArms.png} alt={'coatOfArms'} height='150' style={{margin: '0 auto'}}/>
                    </InfoBlock>
                </div>
            </div>
            <BackButton path={withQuery ? `/countries/${params.cca3}/?compare=true` : '/'} extraClass={styles.backButton}/>
        </>
    );
};

export default CountryCard;