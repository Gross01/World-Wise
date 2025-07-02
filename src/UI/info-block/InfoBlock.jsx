import React from 'react';
import styles from "./InfoBlock.module.css";

const InfoBlock = ({caption, text, children, extraStyles}) => {
    return (
        <div className={`${styles.infoBlock} custom-scrollbar`} style={extraStyles}>
            <span className={styles.caption}>{caption}</span>
            <span className={styles.text}>{text}</span>
            <div className={`flex gap wrap`}>
                {children}
            </div>
        </div>
    );
};

export default InfoBlock;