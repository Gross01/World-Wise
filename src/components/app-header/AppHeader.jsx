import styles from './AppHeader.module.css'
import ThemeToggle from '../theme-toggle/ThemeToggle'

const AppHeader = () => {

    return (
        <header className={styles.header}>
            <div>
                <svg className={styles.logo} viewBox="191.8368815592204 208.91169451073986 378.9325337331335 74.60047732696897" xmlns="http://www.w3.org/2000/svg" width="230" height="70">
                    <g>
                        <text fontStyle="normal" fontWeight="bold" transform="matrix(2.47386 0 0 2.88145 -292.177 -458.619)" stroke="#000" textAnchor="start" fontFamily="'Raleway'" fontSize="30" id="svg_1" y="253.97693" x="196.3602" strokeWidth="0">World Wise</text>
                    </g>
                </svg>
            </div>
            <ThemeToggle />
        </header>
    );
};

export default AppHeader;