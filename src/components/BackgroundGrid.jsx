import React from 'react';
import GridImg from '../assets/images/Outline + fill  Square grid.svg';

export default function BackgroundGrid() {
    return (
        <div
            className="background-grid"
            style={{
                backgroundImage: `url('${GridImg}')`,
            }}
        />
    );
}
