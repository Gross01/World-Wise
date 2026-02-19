import React, {useEffect} from 'react';
import {fetchCompareCountry, fetchCountry} from "../../services/country-page/thunk";
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/store";
import Country from "../../components/country/Country";
import CountryPick from "../../components/country-pick/Country-Pick";
import styles from './CountryPage.module.css'
import {AnimatePresence, motion} from "framer-motion";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";

const CountryPage = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const [query] = useSearchParams()
    const compare = query.get("compare");
    const withQuery = query.get("with");
    const loading = useSelector(state => state.countryPage.countryInfo.loading)
    const compareLoading = useSelector(state => state.countryPage.compareCountryInfo.loading)
    const allCountriesLoading = useSelector(state => state.countries.loading)

    useEffect(() => {
        if (params.cca3) {
            dispatch(fetchCountry(params.cca3))
            localStorage.removeItem('quizIndex')
            localStorage.removeItem('rac')
        }


        if (withQuery) {
            dispatch(fetchCompareCountry(withQuery))
        }
    }, [dispatch, params.cca3, withQuery])

    const compareDivStyle = compare ? {display: 'block'} : {display: 'none'};

    if (loading || allCountriesLoading || compareLoading) {
        return (
            <CompassPreloader />
        )
    }

    return (
            <div className={styles.div}>
                <Country />
                <div className={styles.compareDiv} style={compareDivStyle}>
                    <AnimatePresence>
                        {compare && !withQuery && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={styles.pickerWrapper}
                            >
                                <CountryPick />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {compare && withQuery && (
                        <Country compare={true}/>
                    )}
                </div>
            </div>
    );
};

export default CountryPage;