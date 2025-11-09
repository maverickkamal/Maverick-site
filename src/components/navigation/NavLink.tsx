import React from "react";

interface NavLinkProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    variant?: 'home' | 'other' | 'que';
    className?: string;
}

export default function NavLink({
    label,
    isActive,
    onClick,
    variant = 'other',
    className = ''
}: NavLinkProps) {
    // make sure active page is not underline
    const shouldShowUnderline = !isActive;

    // if the page is "que?" make it red
    const textColorClass = variant === 'que' ? 'text-[#c91f1f' : '';
    const baseClasses = "relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity";
    const underlineClasses = shouldShowUnderline
        ? "[text-decoration-skip-ink:none] [text-decoration-style:initial] [text-underline-position:from-font] decoration-[#006b3d] underline"
        : ""
    return (
        <p
            onClick={onClick}
            className={`${baseClasses} ${underlineClasses} ${textColorClass} ${className}`}
        >{label}</p>
    );
}