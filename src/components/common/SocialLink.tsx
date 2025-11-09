import React from "react";

interface SocialLinkProps {
    platform: string;
    href: string;
    icon: string;
    className?: string;
}

export default function SocialLink({ platform, href, icon, className = '' }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative shrink-0 size-[30px] cursor-pointer hover:opacity-70 transition-opacity ${className}`}
            data-name={platform}
            aria-label={platform}
        >
            <img
                alt={platform}
                className="absolute inset-0 max-w-none object-50%-50% object-contain size-full"
                src={icon}
            />
        </a>
    );
}
