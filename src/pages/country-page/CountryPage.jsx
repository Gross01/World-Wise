import React, {useEffect, useState} from 'react';
import {fetchCountry} from "../../services/country-page/thunk";
import {removeCountry, setCompare} from "../../services/country-page/slice";
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Country from "../country/Country";
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
    const [animationEnd, setAnimationEnd] = useState(false);
    const loading = useSelector(state => state.countryPage.loading)

    useEffect(() => {
        dispatch(fetchCountry(params.cca3))

        return () => {
            dispatch(removeCountry())
            dispatch(setCompare(false))
        }
    }, [dispatch, params.cca3])

    useEffect(() => {
        if (withQuery) {
            const timerId = setTimeout(() => {
                setAnimationEnd(true)
            }, 200)

            return () => {
                clearTimeout(timerId)
            }
        } else {
            setAnimationEnd(false)
        }
    }, [withQuery, animationEnd])

    const compareDivStyle = compare ? {display: 'block'} : {display: 'none'};

    if (loading) {
        return (
            <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CompassPreloader />
            </div>
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
                    {compare && withQuery && animationEnd &&(
                        <Country compare={true}/>
                    )}
                </div>
            </div>
    );
};

export default CountryPage;