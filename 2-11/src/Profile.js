import React, { useState, useEffect } from 'react';
import users from './users.json'
console.log(users)


function Profile(props) {
    let [profile, setProfile] = useState({})

    useEffect(() => {
        console.log('profile page mounted')

        //Go to database and grabbing the specific profile using the id
        setProfile(users[props.match.params.id])

    }, [props]) //This runs once when the component mounts



    return (
        <div>
            Welcome ... {profile.name}
        </div>
    );
};

export default Profile;