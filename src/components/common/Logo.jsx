import { FullLogoSvg, LogoOutlineSvg } from '../icons';
import styles from './Logo.module.css';

const Logo = ({ isOpen, onClick, className = '' }) => {
    return (
        <div
            className={`${styles.logoContainer} ${className}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick?.();
                }
            }}
        >
            <div className={`${styles.logoImage} ${styles.logoOutline} ${isOpen ? styles.hidden : ''}`}>
                <LogoOutlineSvg />
            </div>
            <div className={`${styles.logoImage} ${styles.logoFull} ${isOpen ? styles.visible : ''}`}>
                <FullLogoSvg />
            </div>
        </div>
    );
};

export default Logo;
