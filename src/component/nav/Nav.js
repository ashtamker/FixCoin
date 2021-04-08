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
                <Link to='/about'>
                <li id="about">What Is Crypto</li>
                </Link>
                <Link to="/mybalance">
                <li className="list-li">My Wallet</li>
                </Link>
                <Link to="/convert">
                <li>Convert</li>
                </Link>
            </ul>
        </div>
    )

}

export default Nav;