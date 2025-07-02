import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './CountryList.module.css'
import CountryItem from "../country-item/CountryItem";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";
import {fetchCountries} from "../../services/countries/thunk";

const CountryList = () => {

    const countries = useSelector(state => state.countries.filteredItems)
    const loading = useSelector(state => state.countries.loading)
    const error = useSelector(state => state.countries.error)

    const dispatch = useDispatch();

    useEffect(() => {
        if (!countries) {
            dispatch(fetchCountries());
        }     
    }, [dispatch, countries])

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