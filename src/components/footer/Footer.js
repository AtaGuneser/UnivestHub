import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import baykusLogo from '../../img/baykusLogo.png'
const Footer = () => {
    return (
        <footer className="footer">
            {/* footer  */}
            <div className="footer-left col-md-4 col-sm-6">
                <p className="about">
                    <span> Biz Kimiz</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span> Adres ve telefon</span> Istanbul, Türkiye</p>
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
            <div className="footer-right col-md-4 col-sm-6">
                <img src={baykusLogo} alt="baykusLogo" className='baykusLogo'/>
                <p className="menu">
                    <a href="#"> Anasayfa </a> | { }
                    <a href="#"> Hakkımızda </a> | { }
                    <a href="#"> Servisler </a> | { }
                    <a href="#"> Bize Ulaşın </a>
                </p>
                <p className="name"> Tüm Hakları Saklıdır &copy; 2023</p>
            </div>
        </footer>
    );
}

export default Footer;
