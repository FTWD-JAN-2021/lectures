import React, { useEffect, useState } from 'react';
import axios from 'axios'

function RickMorty(props) {
    let [rickMorty, setRickMorty] = useState(['🐙'])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                console.log(res)
                setRickMorty(res.data.results)
            })
    }, [])

    const showRickMortyCharacters = () => {
        return rickMorty.map(eachCharacter => {
            return (
                <li>
                    <h3>{eachCharacter.name}</h3>
                    <img src={eachCharacter.image} />
                </li>
            )
        })
    }

    return (
        <div>
            Rick & Morty
            {showRickMortyCharacters()}

        </div>
    );
}

export default RickMorty;