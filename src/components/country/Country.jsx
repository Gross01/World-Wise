import React, {useCallback} from 'react';
import {useSelector} from "react-redux";
import styles from './Country.module.css'
import CountryCard from "../../components/country-card/CountryCard";
import {useNavigate, useParams} from "react-router-dom";

const Country = ({compare}) => {
    const countryInfo = useSelector(state => state.countryPage.countryInfo.item)
    const compareCountryInfo = useSelector(state => state.countryPage.compareCountryInfo.item)
    const loading = useSelector(state => state.countryPage.countryInfo.loading)
    const compareLoading = useSelector(state => state.countryPage.compareCountryInfo.loading)
    const navigate = useNavigate();
    const params = useParams();

    const compareHandler = useCallback(() => {
        navigate(`/countries/${params.cca3}/?compare=true`)
    }, [navigate, params.cca3])

    return (
        !loading &&
            !compareLoading &&
            countryInfo &&
            <div className={styles.div}>
                <CountryCard countryInfo={compare ? compareCountryInfo : countryInfo} compareHandler={compareHandler} compare={compare} />
            </div>
    );
};

export default Country;