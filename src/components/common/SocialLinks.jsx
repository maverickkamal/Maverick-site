import { GitHubIcon, InstagramIcon, XIcon } from '../icons';

const SocialLinks = ({ size = 32, className = '' }) => {
    const socialLinks = [
        {
            name: 'GitHub',
            username: 'maverickkamal',
            url: 'https://github.com/maverickkamal',
            Icon: GitHubIcon,
            ariaLabel: 'Visit GitHub profile'
        },
        {
            name: 'Instagram',
            username: 'maverickkamal_',
            url: 'https://instagram.com/maverickkamal_',
            Icon: InstagramIcon,
            ariaLabel: 'Visit Instagram profile'
        },
        {
            name: 'X',
            username: 'mav3rickism',
            url: 'https://x.com/mav3rickism',
            Icon: XIcon,
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
                    <social.Icon size={size} className="social-icon" />
                    <span className="social-username">{social.username}</span>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
