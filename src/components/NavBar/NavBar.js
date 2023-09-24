import React from 'react';
import './NavBar.css';
import baykusLogo from '../../img/baykusLogo.png'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src={baykusLogo} alt="logo" className='baykusLogo' /></a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/hakkimizda">About Us</a></li>
                <li><a href="/hakkimizda">Services</a></li>
                <li><a href="/iletisim">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
