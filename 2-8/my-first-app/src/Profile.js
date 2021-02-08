import React from 'react';


function whatsMyAge() {
    return Math.random()
}


function Profile(props) {
    console.log(props)

    return (
        <div>
            Profile Component!!
            <h1>My Name is {props.name} </h1>
            <img src="https://avatars.githubusercontent.com/u/3624098?s=60&u=9dcfc4556fc2672a60b2110c7cc8695e733e2b81&v=4" />
            <p>age: {whatsMyAge()} </p>
            <h2>My favorite food is: {props.favoriteFood} </h2>
        </div>
    );

}

export default Profile;