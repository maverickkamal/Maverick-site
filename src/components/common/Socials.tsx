import React from 'react';
import SocialLink from './SocialLink';
import imgGitHub from '../../assets/images/GitHub.png';
import imgInstagram from '../../assets/images/Instagram.png';
import imgX from '../../assets/images/X.png';

interface SocialsProps {
    className?: string;
}

const socialLinks = [
    {
        platform: 'GitHub',
        href: 'https://github.com/maverickkamal',
        icon: imgGitHub,    
    },
    {
        platform: 'Instagram',
        href: 'https://www.instagram.com/maverickkamal_/',
        icon: imgInstagram,
    },
    {
        platform: 'X',
        href: 'https://x.com/mav3rickism',
        icon: imgX,
    },
];

export default function Socials({ className = '' }: SocialsProps) {
    return (
        <div
            className={`absolute box-border content-stretch flex gap-[10px] items-start left-[537px] overflow-clip p-[10px] top-[966px] ${className}`}
            data-name="socials"
        >
            {socialLinks.map((social) => (
                <SocialLink
                    key={social.platform}
                    platform={social.platform}
                    href={social.href}
                    icon={social.icon}
                />
            ))}
        </div>    
    );
}