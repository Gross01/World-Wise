import React from 'react';
import styles from "./InfoBlock.module.css";

type Props = {
    caption: string;
    text: string | null;
    children?: React.ReactNode;
    extraStyles?: Record<string, string>;
}

const InfoBlock = ({caption, text, children, extraStyles}: Props) => {
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