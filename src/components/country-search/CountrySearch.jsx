import {useState, useEffect} from 'react';
import styles from './CountrySearch.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {sortAndFilterCountries} from '../../services/countries/slice'
import {setSearchQuery} from "../../services/search-query/slice";

const CountrySearch = () => {
    const searchQuery = useSelector(state => state.searchQuery.value)
    const [value, setValue] = useState(searchQuery)
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries.items)

    useEffect(() => {
        if (!countries) return

        const timerId = setTimeout(() => {
            dispatch(sortAndFilterCountries(value))
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [value, dispatch, countries])

    const onChange = (e) => {
        setValue(e.target.value)
        dispatch(setSearchQuery(e.target.value))
    }

    return (
        <div className={styles.div}>
            <input className={styles.input} 
                type="text" 
                placeholder='Search your country...' 
                value={value ?? ''}
                onChange={(e) => onChange(e)}
                />
        </div>
    );
};

export default CountrySearch;