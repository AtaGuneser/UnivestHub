import React from 'react';
import './Footer.css'; // CSS dosyasını içe aktarıyoruz

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">Logo</a>
                </div>
                <ul className="footer-links">
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="/hakkimizda">Hakkımızda</a></li>
                    <li><a href="/iletisim">İletişim</a></li>
                </ul>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.twitter.com/">Twitter</a>
                <a href="https://www.instagram.com/">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
