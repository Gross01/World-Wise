import {useSelector} from "../../services/store";
import styles from './CountryList.module.css'
import CountryItem from "../country-item/CountryItem";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";
import { MainPageCountryInfo } from '../../utils/types/main-page-country-info';

const CountryList = () => {

    const countries = useSelector(state => state.countries.filteredItems)
    const loading = useSelector(state => state.countries.loading)
    const error = useSelector(state => state.countries.error)

    if (loading) {
        return (
            <div className={styles.div}>
                <CompassPreloader />
            </div>
        )
    }

    return (
            <ul className={styles.list}>
                {!loading &&
                    !error &&
                    countries &&
                    countries.map((country: MainPageCountryInfo) => (
                        <CountryItem country={country} key={country.name.common} />
                    ))
                }
            </ul>
    );
};

export default CountryList;