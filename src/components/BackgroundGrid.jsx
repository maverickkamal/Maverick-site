import React from 'react';
import GridImg from '../assets/images/Outline + fill  Square grid.svg';

export default function BackgroundGrid() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url('${GridImg}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                pointerEvents: 'none',
                zIndex: 1,  
                opacity: 0.6,
            }}
        />
    );
}
