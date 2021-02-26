import React from 'react';
import { Link } from 'react-router-dom'
function NavBar(props) {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/stuff">Stuff</Link>
        </nav>
    );
}

export default NavBar;