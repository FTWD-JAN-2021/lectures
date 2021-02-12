import { useState, useEffect } from 'react';

const ForExample = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    useEffect(
        () => {
            console.log("effect");
        },
        [username]
    );

    useEffect(() => {
        return () => {
            console.log("cleaned up");
        };
    }, []);

    const handleName = e => {
        const { value } = e.target;

        setName(value);
    };

    const handleUsername = e => {
        const { value } = e.target;

        setUsername(value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={handleName} />
                <input value={username} onChange={handleUsername} />
            </div>
            <div>
                <div>
                    <span>{name}</span>
                </div>
                <div>
                    <span>{username}</span>
                </div>
            </div>
        </div>
    );
};

function App() {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShouldRender(false);
        }, 5000);
    }, []);

    return shouldRender ? <ForExample /> : null;
}


export default App