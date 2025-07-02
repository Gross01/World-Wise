import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCountry} from "../../services/country-page/thunk";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";
import {removeCountry} from "../../services/country-page/slice";
import styles from './Country.module.css'
import CountryCard from "../../components/country-card/CountryCard";

const Country = () => {

    const params = useParams()
    const dispatch = useDispatch()
    let countryInfo = useSelector(state => state.countryPage.item)
    const loading = useSelector(state => state.countryPage.loading)
    const error = useSelector(state => state.countryPage.error)

    useEffect(() => {
        dispatch(fetchCountry(params.cca3))

        return () => {
            dispatch(removeCountry())
        }
    }, [dispatch, params])

    if (loading) {
        return (
            <div className={styles.preloaderDiv}>
                <CompassPreloader />
            </div>
        )
    }

    return (
        !loading &&
            !error &&
            countryInfo &&
            <CountryCard countryInfo={countryInfo} />
    );
};

export default Country;