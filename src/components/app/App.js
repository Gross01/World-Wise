import AppHeader from "../app-header/AppHeader";
import '../../index.css'
import styles from './App.module.css'
import {Routes, Route} from "react-router-dom";
import Home from "../../pages/home/Home";
import Country from "../../pages/country/Country";

function App() {

      return (
          <>
            <AppHeader />
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='countries/:countryName' element={<Country />}/>
                </Routes>
            </main>
          </>
      );
}

export default App;
