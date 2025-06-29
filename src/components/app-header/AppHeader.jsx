import React from 'react';
import logo from '../../images/world-wise-logo.svg'
import styles from './AppHeader.module.css'

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="World Wise Logo" width='230' height='70'/>
        </header>
    );
};

export default AppHeader;