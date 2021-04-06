import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = ()=> {
    return (
        <div className="nav-container">
            <ul className="main-nav">
                <Link to='/'>
                <li id="home">Home</li>
                </Link>
                <Link to='/mybalance'>
                <li className="list-li">My Wallet</li>
                </Link>
                <li>Convert</li>
            </ul>
        </div>
    )

}

export default Nav;