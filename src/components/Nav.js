/* eslint-disable */

import React from 'react';
import '../App.css';
import {NavLink } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <h3>
                Math Magicians
            </h3>
            <ul className='nav-links'>
                <li><NavLink to="/">
                    Home
                    </NavLink>
                </li>
                <h2>|</h2>
                <li><NavLink to="/calculator">
                    Calculator
                    </NavLink>
                </li>
                <h2>|</h2>
                <li><NavLink to="/quote">
                    Quote
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;