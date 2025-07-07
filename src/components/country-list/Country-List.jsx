import React from 'react';
import {useSelector} from "react-redux";
import styles from './CountryList.module.css'
import CountryItem from "../country-item/CountryItem";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";

const CountryList = () => {

    const countries = useSelector(state => state.countries.filteredItems)
    const loading = useSelector(state => state.countries.loading)
    const error = useSelector(state => state.countries.error)

    if (loading) {
        return (
            <div className={styles.div}>
                <CompassPreloader />
            </div>
        )
    }

    return (
            <ul className={styles.list}>
                {!loading &&
                    !error &&
                    countries &&
                    countries.map((country, i) => (
                        <CountryItem country={country} key={country.name.common} />
                    ))
                }
            </ul>
    );
};

export default CountryList;