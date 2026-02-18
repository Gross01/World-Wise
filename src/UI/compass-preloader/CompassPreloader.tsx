import React from 'react';
import styles from './CompassPreloader.module.css'

const CompassPreloader = () => {
    return (
        <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default CompassPreloader;