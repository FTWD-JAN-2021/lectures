import React, { useEffect, useState } from 'react';
import axios from 'axios'

//https://ih-beers-api2.herokuapp.com/beers

function IronBeers(props) {

    let [beers, setBeers] = useState(['🌭'])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')
            .then(res => {
                console.log(res)
                setBeers(res.data)
            })
    }, [])



    const showDemBeers = () => {
        return beers.map(eachBeer => {
            return (
                <li>
                    <img src={eachBeer.image_url} />
                </li>
            )
        })
    }


    return (
        <div>
            Iron Beers
            {showDemBeers()}
        </div>
    );
}

export default IronBeers;