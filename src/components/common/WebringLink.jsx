import { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const WebringLink = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let webringElement = containerRef.current.querySelector('pagering-link');
    
    if (!webringElement) {
      webringElement = document.createElement('pagering-link');
      containerRef.current.appendChild(webringElement);
    }

    webringElement.setAttribute('theme', theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  return <div ref={containerRef} className="webring-container"></div>;
};

export default WebringLink;

