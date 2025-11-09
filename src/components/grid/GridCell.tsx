import React from "react";

interface GridCellProps {
    bgColor?: string;
    className?: string;
}

export default function GridCell({ bgColor, className = '' }: GridCellProps) {
    return (
        <div className={`mr-[-1px] relative shrink-0 size-[74px] ${bgColor || ''} ${className}`}>
            <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" 
            />
        </div>
    );
}

