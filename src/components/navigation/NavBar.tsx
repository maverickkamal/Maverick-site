import React from "react";
import NavLink from "./NavLink";

type Page = 'home' | 'about' | 'projects' | 'articles' | 'que';
type Orientation = 'horizontal' | 'vertical';

interface NavBarProps {
    orientation: Orientation;
    activePage: Page;
    onNavigate: (page: Page) => void;
    className?: string;
}

const navItems: { label: string; page: Page }[] = [
    { label: 'home', page: 'home' },
    { label: 'about', page: 'about' },
    { label: 'projects', page: 'projects' },
    { label: 'articles', page: 'articles' },
    { label: 'que?', page: 'que' },
];

export default function NavBar({
    orientation,
    activePage,
    onNavigate,
    className = ''
}: NavBarProps) {
    const isVertical = orientation === 'vertical';
    // making different styles for vertical (home page) and horizontal (other pages) navbars
    const containerClasses = isVertical
        ? "absolute box-border content-stretch flex flex-col font-['Outfit:SemiBold',sans-serif] font-medium gap-[40px] h-[368px] items-start leading-[normal] left-[236px] overflow-clip p-[10px] text-[#1a1a1a] text-[24px] text-nowrap top-[128px] whitespace-pre"
        : "absolute box-border content-stretch flex flex-row font-['Outfit:SemiBold',sans-serif] font-medium gap-[40px] items-start leading-[normal] overflow-clip p-[10px] text-[#1a1a1a] text-[24px] text-nowrap whitespace-pre";
    return (
        <div
            className={`${containerClasses} ${className}`}>
            {navItems.map((item) => (
                <NavLink
                    key={item.page}
                    label={item.label}
                    isActive={activePage === item.page}
                    onClick={() => onNavigate(item.page)}
                    variant={item.page === 'que' ? 'que' : (item.page === 'home' ? 'home' : 'other')}
                />
            ))}
        </div>
    );
}