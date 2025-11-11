import React from "react";
import Socials from './Socials';

interface FooterProps {
    className?: string;
    showSocials?: boolean;
}

export default function Footer({ className = '', showSocials = true }: FooterProps) {
    return (
        <>
            <p className="relative font-body leading-[normal] left-[246px] text-foreground text-body top-[981px]">
                © 2025 Maverick. All rights reserved.
            </p>
            <p className="relative font-body leading-[normal] left-[246px] text-foreground text-body top-[1036px]">
                Human live is more important than politics, religion or culture
            </p>
            <p className="relative font-body leading-[normal] left-[246px] text-foreground text-[16px] top-[981px]">
                {`Made with ❤️`}
            </p>
            {showSocials && <Socials />}
        </>
    );
}