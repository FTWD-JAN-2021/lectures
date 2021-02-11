import React, { useEffect } from 'react';

function Home(props) {
    useEffect(() => {
        console.log('home page mounted')
    }, []) //This runs once when the component mounts

    return (
        <div>
            Welcome Home
        </div>
    );
}

export default Home;