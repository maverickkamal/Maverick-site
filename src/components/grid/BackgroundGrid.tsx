import React from "react";
import Grid from './Grid';

interface BackgroundGridProps {
    className?: string;
}

export default function BackgroundGrid({ className = '' }: BackgroundGridProps) {
    return (
        <div
            className={`absolute inset-0 bg-white opacity-50 overflow-hidden w-full h-full ${className}`}
            data-name="Outline + fill Square grid"
        >
            <Grid />
        </div>
    );
}