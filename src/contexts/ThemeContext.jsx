import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

const getThemeFromTime = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 20 ? 'light' : 'dark';
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const manualTheme = localStorage.getItem('theme-manual');
        if (manualTheme) {
            return manualTheme;
        }
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            localStorage.setItem('theme-manual', savedTheme);
            return savedTheme;
        }
        
        return getThemeFromTime();
    });

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const checkTimeAndUpdateTheme = () => {
            const manualTheme = localStorage.getItem('theme-manual');
            if (!manualTheme) {
                const timeBasedTheme = getThemeFromTime();
                setTheme(timeBasedTheme);
            }
        };

        checkTimeAndUpdateTheme();

        const interval = setInterval(checkTimeAndUpdateTheme, 60 * 60 * 1000); 

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                checkTimeAndUpdateTheme();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            const manualTheme = localStorage.getItem('theme-manual');
            if (!manualTheme) {
                const timeBasedTheme = getThemeFromTime();
                setTheme(timeBasedTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme-manual', newTheme);
    };

    const isDark = theme === 'dark';

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;

