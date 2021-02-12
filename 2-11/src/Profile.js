import React, { useState, useEffect } from 'react';
import users from './users.json'
console.log(users)


function Profile(props) {
    let [profile, setProfile] = useState({})
    let [counter, setCounter] = useState(0)
    console.log(profile, counter)

    const logThis = () => {
        console.log(counter)
    }

    useEffect(() => {

        console.log('use effect')
        //Go to database and grabbing the specific profile using the id
        setProfile(users[props.match.params.id])

        setInterval(() => console.log(profile), 2000)

        setInterval(() => logThis(), 2000)
    }, [props]) //This runs once when the component mounts



    return (
        <div>
            <button onClick={() => setCounter(++counter)}>Up</button>
            Welcome ... {profile.name}
        </div>
    );
};

export default Profile;