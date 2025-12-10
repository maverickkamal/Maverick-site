import { NavLink } from 'react-router-dom';
import Logo from '../common/Logo';
import styles from './VerticalNav.module.css';

const VerticalNav = ({ isOpen, toggle }) => {
  const navItems = [
    { to: '/', label: 'home' },
    { to: '/about', label: 'about' },
    { to: '/projects', label: 'projects' },
    { to: '/articles', label: 'articles' },
    { to: '/que', label: 'que?' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={`${styles.logoWrapper} ${isOpen ? styles.open : ''}`}>
          <Logo
            isOpen={isOpen}
            onClick={toggle}
            className={styles.logoToggle}
          />
        </div>

        <nav className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navVertical}>
            {navItems.map((item, index) => (
              <li key={item.to} className={styles.navItem} style={{ '--i': index }}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => window.innerWidth <= 768 && toggle()}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default VerticalNav;
