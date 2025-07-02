import {useState, useEffect} from 'react';
import styles from './CountrySearch.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {sortAndFilterCountries} from '../../services/countries/slice'

const CountrySearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries.items)

    useEffect(() => {
        if (!countries) return

        const timerId = setTimeout(() => {
            dispatch(sortAndFilterCountries(searchQuery))
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [searchQuery, dispatch, countries])

    return (
        <div className={styles.div}>
            <input className={styles.input} 
                type="text" 
                placeholder='Search your country...' 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                />
        </div>
    );
};

export default CountrySearch;