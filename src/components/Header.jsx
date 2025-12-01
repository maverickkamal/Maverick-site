import React from 'react';
import FullLogo from '../assets/images/Full logo.svg';

const Header = () => {
  return (
    <header style={{ paddingBottom: '20px', display: 'flex', flexDirection: 'column' }}>
      <div className="flex flex-col gap-4">
        <div className="logo">
          <img src={FullLogo} alt="Maverick Logo" style={{ width: '150px' }} />
        </div>

        <nav>
          <ul className="flex flex-col gap-4" style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.1rem', fontWeight: 500 }}>
            <li><a href="#" className="hover:text-primary transition-colors">home</a></li>
            <li><a href="#" className="hover:text-primary transition-colors" style={{ borderBottom: '1px solid var(--primary)' }}>about</a></li>
            <li><a href="#" className="hover:text-primary transition-colors" style={{ borderBottom: '1px solid var(--primary)' }}>projects</a></li>
            <li><a href="#" className="hover:text-primary transition-colors" style={{ borderBottom: '1px solid var(--primary)' }}>articles</a></li>
            <li><a href="#" className="hover:text-primary transition-colors" style={{ borderBottom: '1px solid var(--primary)' }}>que?</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
