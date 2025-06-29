import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCountry} from "../../services/country-page/thunk";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";
import {removeCountry} from "../../services/country-page/slice";

const Country = () => {

    const params = useParams()
    const dispatch = useDispatch()
    let countryInfo = useSelector(state => state.countryPage.item)
    const loading = useSelector(state => state.countryPage.loading)
    const error = useSelector(state => state.countryPage.error)

    useEffect(() => {
        dispatch(fetchCountry(params.countryName))

        return () => {
            dispatch(removeCountry())
        }
    }, [dispatch, params])

    if (loading) {
        return (
            <CompassPreloader />
        )
    }

    return (
        !loading &&
            !error &&
            countryInfo &&
            <div>
                {countryInfo[0]?.name.common}
            </div>
    );
};

export default Country;