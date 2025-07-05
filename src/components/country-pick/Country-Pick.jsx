import React from 'react';
import styles from './CountryPick.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {fetchCompareCountry} from "../../services/country-page/thunk";
import {fetchCountries} from "../../services/countries/thunk";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";
import CloseButton from "../../UI/close-button/CloseButton";

const CountryPick = () => {
    const countries = useSelector(state => state.countries.items)
    const loading = useSelector(state => state.countries.loading)
    const error = useSelector(state => state.countries.error)
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    if (!countries) {
        dispatch(fetchCountries())
    }

    if (loading) {
        <CompassPreloader />
    }

    const closeButtonHandler = () => {
        navigate(`/countries/${params.cca3}`)
    }

    const onClick = (cca3) => {
        dispatch(fetchCompareCountry(cca3))
        navigate(`/countries/${params.cca3}/?compare=true&with=${cca3}`)
    }

    return (
        <div className={`${styles.div}`}>
            <h2 className={styles.h2}>Choose county to compare</h2>
            <ul className={`${styles.ul}  custom-scrollbar`}>
                {countries &&
                    !loading &&
                    !error &&
                        countries.map(country => {
                            return (
                                <Link
                                    onClick={() => onClick(country.cca3)}
                                    className={styles.link}
                                    to={`/countries/${params.cca3}/?compare=true&with=${country.cca3}`}
                                >
                                    <li className={styles.li}>
                                        <img src={country.flags.png} width='50' alt={country.flags.alt}/>
                                        <span className={styles.text}>{country.name.common}</span>
                                    </li>
                                </Link>
                            )
                    })}
            </ul>
            <CloseButton buttonHandler={closeButtonHandler} extraClass={styles.closeButton}/>
        </div>
    );
};

export default CountryPick;