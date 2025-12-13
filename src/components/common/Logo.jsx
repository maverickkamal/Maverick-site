import FullLogo from '../../assets/images/Full logo.svg';
import LogoOutline from '../../assets/images/Logo Outline.svg';
import styles from './Logo.module.css';

const Logo = ({ isOpen, onClick, className = '' }) => {
    return (
        <div
            className={`${styles.logoContainer} ${className}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <img
                src={LogoOutline}
                alt="Maverick Logo"
                className={`${styles.logoImage} ${styles.logoOutline} ${isOpen ? styles.hidden : ''}`}
            />
            <img
                src={FullLogo}
                alt="Maverick Logo"
                className={`${styles.logoImage} ${styles.logoFull} ${isOpen ? styles.visible : ''}`}
            />
        </div>
    );
};

export default Logo;
