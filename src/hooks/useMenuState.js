import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useMenuState = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    useEffect(() => {
        close();
    }, [location.pathname, close]);
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                close();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, close]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return {
        isOpen,
        open,
        close,
        toggle,
    };
};

export default useMenuState;
