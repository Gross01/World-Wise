import React from 'react';
import styles from './CountrySearch.module.css';

const CountrySearch = () => {
    return (
        <div className={styles.div}>
            <input className={styles.input} type="text" placeholder='Search your country...'/>
            <select className={styles.select} name="sort">
                <option value="sort-by">sort by</option>
                <option value="alphabet">alphabet</option>
            </select>
        </div>
    );
};

export default CountrySearch;