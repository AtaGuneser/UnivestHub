import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import baykusLogo from '../../img/baykusLogo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p className="about">
                    <span> About</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span> Address and phone</span> Istanbul, Turkey</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p> (+00) 0000 000 000</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="#"> office@company.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className="logo-menu">
                    <img src={baykusLogo} alt="baykusLogo" className='baykusLogo' />
                    <p className="menu">
                        <a href="#"> Home </a> | {}
                        <a href="#"> About Us </a> | {}
                        <a href="#"> Services </a> | {}
                        <a href="#"> Contact Us </a>
                    </p>
                </div>
                <p className="name"> All rights reserved &copy; 2023</p>
            </div>
        </footer>
    );
}

export default Footer;
