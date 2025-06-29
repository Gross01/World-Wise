import React from 'react';
import styles from "./CountryItem.module.css";
import {useNavigate} from "react-router-dom";

const CountryItem = ({country}) => {

    const navigate = useNavigate();
    const countyClass = country.name.common === 'Nepal' ? styles.nepal : ''

    const onClick = () => {
        navigate(`countries/${country.name.common}`)
    }

    return (
        <li onClick={onClick} className={`${styles.li} ${countyClass}`} key={country.name.common}>
            <img className={styles.flag} src={country.flags.svg} alt={country.flags.alt}/>
            <span className={styles.name}>{country.name?.common}</ span>
        </li>
    );
};

export default CountryItem;