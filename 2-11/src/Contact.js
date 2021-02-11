import React, { useEffect } from 'react';

function Contact(props) {
    useEffect(() => {
        console.log('contact page mounted')
    }, []) //This runs once when the component mounts

    return (
        <div>
            1800-call-me
        </div>
    );
}

export default Contact;