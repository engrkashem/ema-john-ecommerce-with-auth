import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <div className='nav-tabs'>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/order'}>Orders</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={'/about'}>About</Link>
                {user ? <Link onClick={() => signOut(auth)} to={'/login'}>Sign Out</Link>
                    : <Link to={'/login'}>Login</Link>}
            </div>
        </nav>
    );
};

export default Header;
