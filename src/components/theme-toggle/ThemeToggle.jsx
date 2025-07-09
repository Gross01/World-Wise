import light from '../../images/light.svg'
import dark from '../../images/moon.svg'
import {useState, useEffect} from 'react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
    const [src, setSrc] = useState(() => {
        const theme = localStorage.getItem('darkTheme')
        return JSON.parse(theme) ? light : dark
    })
    const [isDark, setIsDark] = useState(() => {
        const theme = localStorage.getItem('darkTheme')
        return theme ? JSON.parse(theme) : false
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const onClick = () => {
        if (src === dark) {
            localStorage.setItem('darkTheme', true)
            setSrc(light)
            setIsDark(true)
        }

        if (src === light) {
            localStorage.setItem('darkTheme', false)
            setSrc(dark)
            setIsDark(false)
        }
    }

    return (
        <button onClick={onClick} className={styles.button} type='button'>
            <img src={src} width='30' height='30' alt='theme'/>
        </button>
    );
};

export default ThemeToggle;