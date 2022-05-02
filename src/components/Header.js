import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../logoProfilance.svg';
import './Header.scss';

export const Header = () => 
<header className="header">
    <Link to="/" className='header__logo'>
            <img src={logo}/>
    </Link>
</header>
