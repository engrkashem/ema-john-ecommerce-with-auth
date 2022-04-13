import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <div className='nav-tabs'>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/order'}>Orders</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </nav>
    );
};

export default Header;
