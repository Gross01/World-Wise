import React from 'react';
import styles from './BackButton.module.css';
import {useNavigate} from "react-router-dom";

const BackButton = ({extraClass, path}) => {

    const navigate = useNavigate()

    const onCLick = () => {
        navigate(path)
    }

    return (
        <button onClick={onCLick} type='button' className={`${styles.button} ${extraClass}`} title='back to countries'>
            <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/></svg>
        </button>
    );
};

export default BackButton;