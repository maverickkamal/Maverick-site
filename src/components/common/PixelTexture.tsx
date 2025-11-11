import React from "react";
import pixelsImg from '../../assets/images/pixels.png';

interface PixelTextureProps {
    className?: string;
}

export default function PixelTexture({ className = '' }: PixelTextureProps) {
    return (
        <div
            className={`absolute inset-0 mix-blend-overlay opacity-90 pointer-events-none w-full h-full ${className}`}
            style={{ zIndex: 9999 }}
            data-name="pixels"
        >
            <div
                className="absolute bg-repeat inset-0 pointer-events-none w-full h-full" 
                data-name="texture"
                style={{
                    backgroundImage: `url('${pixelsImg}')`,
                    backgroundSize: '1200px 1200px',
                }}
            />
        </div>
    );  
}