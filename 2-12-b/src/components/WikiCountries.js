import React, { useEffect, useState } from 'react';
import axios from 'axios'






function WikiCountries(props) {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                console.log(res)
                setCountries(res.data)
            })
    }, [])


    const showCountries = () => {
        return countries.map(eachCountry => <li>{eachCountry.name}</li>)
    }

    return (
        <div>
            Wiki Countries
            {showCountries()}
        </div>
    );
}

export default WikiCountries;


// Alternative way
// let res = await axios.get('https://restcountries.eu/rest/v2/all')
// console.log(res)