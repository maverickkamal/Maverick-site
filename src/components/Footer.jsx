import React from 'react';
import GitHubIcon from '../assets/images/GitHub.png';
import InstagramIcon from '../assets/images/Instagram.png';
import XIcon from '../assets/images/X.png';

const Footer = () => {
    return (
        <footer style={{
            padding: '0',
            width: '100%',
        }}>
            <div className="flex flex-col gap-6 items-start">

                <div style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', marginTop: '10px' }}>
                    <p>Copyright @ 2025</p>
                    <p>Made with ❤️</p>
                </div>

                <div className="flex gap-6 items-center">
                    <a href="https://github.com/maverickkamal" className="hover:opacity-70 transition-opacity">
                        <img src={GitHubIcon} alt="GitHub" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="https://instagram.com/maverickkamal_" className="hover:opacity-70 transition-opacity">
                        <img src={InstagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="https://x.com/mav3rickism" className="hover:opacity-70 transition-opacity">
                        <img src={XIcon} alt="X" style={{ width: '24px', height: '24px' }} />
                    </a>
                </div>

                <blockquote style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontStyle: 'italic', lineHeight: 1.4 }}>
                    Human life is more important than politics, religion or culture
                </blockquote>
            </div>
        </footer>
    );
};

export default Footer;
