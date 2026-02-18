import React, {useCallback} from 'react';
import {useSelector} from "../../services/store";
import styles from './Country.module.css'
import CountryCard from "../country-card/CountryCard";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

type Props = {
    compare: boolean
}

const Country = ({compare}: Props) => {
    const countryInfo = useSelector(state => state.countryPage.countryInfo.item)
    const compareCountryInfo = useSelector(state => state.countryPage.compareCountryInfo.item)
    const loading = useSelector(state => state.countryPage.countryInfo.loading)
    const compareLoading = useSelector(state => state.countryPage.compareCountryInfo.loading)
    const navigate = useNavigate();
    const params = useParams();
    const [query] = useSearchParams()
    const withQuery = query.get("with");

    const compareHandler = useCallback(() => {
        if (compare) {
            navigate(`/countries/${withQuery}/?compare=true`)
            return
        }
        navigate(`/countries/${params.cca3}/?compare=true`)
    }, [navigate, params.cca3, withQuery, compare])

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