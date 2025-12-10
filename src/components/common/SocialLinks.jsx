import React from 'react';
import GitHubIcon from '../../assets/images/GitHub.png';
import InstagramIcon from '../../assets/images/Instagram.png';
import XIcon from '../../assets/images/X.png';

const SocialLinks = ({ size = 32, className = '' }) => {
    const iconStyle = {
        width: `${size}px`,
        height: `${size}px`,
    };

    const socialLinks = [
        {
            name: 'GitHub',
            username: 'maverickkamal',
            url: 'https://github.com/maverickkamal',
            icon: GitHubIcon,
            ariaLabel: 'Visit GitHub profile'
        },
        {
            name: 'Instagram',
            username: 'maverickkamal_',
            url: 'https://instagram.com/maverickkamal_',
            icon: InstagramIcon,
            ariaLabel: 'Visit Instagram profile'
        },
        {
            name: 'X',
            username: 'mav3rickism',
            url: 'https://x.com/mav3rickism',
            icon: XIcon,
            ariaLabel: 'Visit X (Twitter) profile'
        }
    ];

    return (
        <div className={`social-links ${className}`}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="social-link"
                >
                    <img src={social.icon} alt={social.name} style={iconStyle} />
                    <span className="social-username">{social.username}</span>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;

