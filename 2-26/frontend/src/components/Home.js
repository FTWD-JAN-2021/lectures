import React, { useState } from 'react';
import axios from 'axios'

function Home(props) {
    let [inputz, setInputz] = useState(' 🧐 ')

    const handleChange = (event) => {
        setInputz(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('=-=-=-=-==-', inputz)
        axios.post(`http://localhost:5000/saveStuff`, { inputz })
    }


    return (
        <div>
            Home Page...

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Add stuff..." />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Home;