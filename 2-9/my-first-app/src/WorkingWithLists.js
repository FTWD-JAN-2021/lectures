import React, { useState } from 'react';

function WorkingWithLists(props) {

    const [mukbang, setMukbang] = useState([
        { name: 'bibimbap', tastiness: 8 },
        { name: 'cooked keemchi', tastiness: 6 },
        { name: 'fried chicken', tastiness: 10 },
        { name: 'seafood pancake', tastiness: 7 },
        { name: 'bulgogi', tastiness: 10 },
        { name: 'ttukbokki', tastiness: 10 }
    ])


    const showMukbang = () => {
        return mukbang.map((eachFood, i) => {
            return <li key={i}>Name: {eachFood.name} >>> Tastiness: {eachFood.tastiness}</li>
        })
    }

    // const showMukbang = () => mukbang.map((eachFood, i) => <li key={i}>{eachFood}</li>)

    const addGalbi = () => {
        let food = { name: 'galbi', tastiness: 10 }
        console.log(` add ${food.name} to list`)
        mukbang.push(food)
        setMukbang([...mukbang])
    }


    const removeMukbang = () => {
        let index = Math.floor(Math.random() * mukbang.length)
        mukbang.splice(index, 1)
        setMukbang([...mukbang])
    }

    return (
        <div>
            <h2>Working With Lists</h2>
            <ul>
                <button onClick={addGalbi}>Add Food</button>
                <button onClick={removeMukbang}>Remove Food</button>
                {showMukbang()}

                {/* {mukbang.map((eachFood, i) => <li key={i}>{eachFood}</li>)} */}
            </ul>
        </div>
    );
}

export default WorkingWithLists;