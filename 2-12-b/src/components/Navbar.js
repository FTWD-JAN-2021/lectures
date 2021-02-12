import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/rick-morty">Rick Morty</Link>
            <Link to="/wiki-countries">Wiki Countries</Link>
            <Link to="/iron-beers">Iron Beers</Link>
            <Link to="/chuck-norris">Chuck Norris</Link>
        </nav>
    );
}

export default NavBar;