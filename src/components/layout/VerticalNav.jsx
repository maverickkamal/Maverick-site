import { NavLink } from 'react-router-dom';
import FullLogo from '../../assets/images/Full logo.svg';
import LogoOutline from '../../assets/images/Logo Outline.svg';
import useMenuState from '../../hooks/useMenuState';

const VerticalNav = () => {
    const { isOpen, toggle } = useMenuState();

    const navItems = [
        { to: '/', label: 'home' },
        { to: '/about', label: 'about' },
        { to: '/projects', label: 'projects' },
        { to: '/articles', label: 'articles' },
        { to: '/que', label: 'que?' },
    ];

    return (
        <header style={{ paddingBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <div className="flex flex-col gap-4">
                <div className="logo logo-toggle" onClick={toggle} role="button" tabIndex={0} aria-label="Toggle navigation">
                    <img
                        src={isOpen ? FullLogo : FullLogo}
                        alt="Maverick Logo"
                    />
                </div>

                <nav className="desktop-nav">
                    <ul className="nav-vertical">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`nav-overlay ${isOpen ? 'open' : ''}`}>
                    <div className="logo" onClick={toggle}>
                        <img src={FullLogo} alt="Maverick Logo" />
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-6 text-center">
                            {navItems.map((item, index) => (
                                <li key={item.to} className={`animate-fade-in-up stagger-${index + 1}`}>
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive }) => isActive ? 'active' : ''}
                                        onClick={toggle}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <style>{`
        .desktop-nav {
          display: block;
        }
        
        .nav-overlay {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .nav-overlay {
            display: flex;
          }
          
          .logo-toggle {
            cursor: pointer;
          }
        }
      `}</style>
        </header>
    );
};

export default VerticalNav;
