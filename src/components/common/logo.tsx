import React from 'react';
import FullLogoSvg from '../../assets/Full_logo.svg';
import OutlineLogoSvg from '../../assets/Logo_Outline.svg';

type LogoVariant = 'full' | 'outline';
type LogoColor = 'black' | 'white' | 'green-light' | 'green-dark';

interface LogoProps {
    variant?: LogoVariant;
    color?: LogoColor;
    className?: string;
    onClick?: () => void;
}

export default function Logo({
    variant = 'full',
    color = 'black',
    className = '',
    onClick
}: LogoProps) {
    const logoSrc = variant === 'full' ? FullLogoSvg : OutlineLogoSvg;

    const getColorFilter = () => {
        switch (color) {
            case 'white':
                return 'brightness(0) invert(1)';
            case 'green-light':
                return 'brightness(0) saturate(100%) invert(38%) sepia(89%) saturate(442%) hue-rotate(97deg) brightness(95%) contrast(101%)';
            case 'green-dark':
                return 'brightness(0) saturate(100%) invert(55%) sepia(19%) saturate(1019%) hue-rotate(101deg) brightness(91%) contrast(86%)';
            case 'black':
            default:
                return 'none';
        }
    };

    return (
        <img
            src={logoSrc}
            alt="Maverick Logo"
            className={className}
            style={{ filter: getColorFilter() }}
            onClick={onClick}
        />
    );
}
