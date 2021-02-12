import React, { useEffect, useState } from 'react';
import axios from 'axios'
//http://api.icndb.com/jokes/random/


function ChuckNorris(props) {

    let [joke, setJoke] = useState('no joke yet')

    useEffect(() => {
        async function fetchData() {
            let res = await axios.get('http://api.icndb.com/jokes/random/')
            setJoke(res.data.value.joke)
        }
        fetchData()
    }, [])


    return (
        <div>
            {joke}!!!
        </div>
    );
}

export default ChuckNorris;