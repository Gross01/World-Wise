import AppHeader from "../app-header/AppHeader";
import '../../index.css'
import styles from './App.module.css'
import {Routes, Route} from "react-router-dom";
import Home from "../../pages/home/Home";
import CountryPage from "../../pages/country-page/CountryPage";
import Quiz from "../../pages/quiz/Quiz";
import {useEffect} from "react";
import {fetchCountries} from "../../services/countries/thunk";
import {useDispatch, useSelector} from "react-redux";

function App() {

        const countries = useSelector(state => state.countries.filteredItems)
        const loading = useSelector(state => state.countries.loading)
        const error = useSelector(state => state.countries.error)

        const dispatch = useDispatch();

        useEffect(() => {
            if (!countries) {
                dispatch(fetchCountries());
            }
        }, [dispatch, countries])

      return (
          countries &&
              !loading &&
              !error &&
          <>
            <AppHeader />
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='countries/:cca3' element={<CountryPage />} />
                    <Route path='quiz/:cca3' element={<Quiz />}/>
                </Routes>
            </main>
          </>
      );
}

export default App;
