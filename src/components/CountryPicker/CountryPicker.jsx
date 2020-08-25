import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, SetFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            SetFetchedCountries(await countries());
        }
        fetchCountries();

    },[SetFetchedCountries])



    return(
        <FormControl className={styles.formControl}>
            <NativeSelect default="" onChange={ (e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;