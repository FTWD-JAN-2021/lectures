import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Stuff(props) {

    let [chutzpah, setChutzpah] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/stuff`)
            .then(res => {
                setChutzpah(res.data)
            })
    }, [])

    const deleteItem = (itemId) => {
        console.log('delete ', itemId)
        axios
            .delete(`http://localhost:5000/deleteChutzpah/${itemId}`)
            .then(res => {
                //console.log(res)
                let copyChutzpah = [...chutzpah]
                let filteredChuzpah = copyChutzpah.filter(each => each._id !== itemId)
                setChutzpah(filteredChuzpah)
            })

    }

    const displayLines = () => {
        return chutzpah.map(eachItem => {
            return (
                <li key={eachItem._id} className="rafael">
                    <h4>{eachItem.inputz}</h4>
                    <button onClick={(e) => deleteItem(eachItem._id)}>Delete</button>
                </li>
            )
        })
    }

    return (
        <div>
            Stuff Page
            <ul>{displayLines()}</ul>
        </div>
    );
}

export default Stuff;