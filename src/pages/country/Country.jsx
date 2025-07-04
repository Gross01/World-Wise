import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";
import styles from './Country.module.css'
import CountryCard from "../../components/country-card/CountryCard";
import {useNavigate, useParams} from "react-router-dom";
import {setCompare} from "../../services/country-page/slice";

const Country = ({compare}) => {
    const countryInfo = useSelector(state => state.countryPage.item)
    const compareCountryInfo = useSelector(state => state.countryPage.compareItem)
    const loading = useSelector(state => state.countryPage.loading)
    const error = useSelector(state => state.countryPage.error)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const compareHandler = useCallback(() => {
        dispatch(setCompare(true))
        navigate(`/countries/${params.cca3}/?compare=true`)
    }, [navigate, params.cca3])

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
            <div className={styles.div}>
                <CountryCard countryInfo={compare ? compareCountryInfo : countryInfo} compareHandler={compareHandler} />
            </div>
    );
};

export default Country;