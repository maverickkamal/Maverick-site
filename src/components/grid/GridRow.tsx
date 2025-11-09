import React from 'react';
import GridCell from './GridCell';

interface GridRowProps {
    cellColors?: (string | undefined)[];
    cellCount?: number;
    className?: string;
}

export default function GridRow({
    cellColors = [],
    cellCount = 20,
    className = ''
}: GridRowProps) {
    // kinda fill array with undefined if cellcolors is shorter than cellcount
    const colors = [...cellColors];
    while (colors.length < cellCount) {
        colors.push(undefined);
    }

    return (
        <div
            className={`box-border content-stretch flex items-start mb-[-1px] pl-0 pr-px py-0 relative shrink-0 ${className}`}
            data-name="Row"
        >
            {colors.slice(0, cellCount).map((color, index) => (
                <GridCell key={index} bgColor={color} />
            ))}
        </div>
    );
}