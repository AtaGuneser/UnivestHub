import React from 'react';
import './NavBar.css'; 

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Ana Sayfa</a></li>
                <li><a href="/hakkimizda">Hakkımızda</a></li>
                <li><a href="/iletisim">İletişim</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
