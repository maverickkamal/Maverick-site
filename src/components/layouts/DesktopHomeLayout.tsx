import React from "react";
import svgPaths from "../data/shapes-desktop";
import Logo from "../common/logo";
import NavBar  from "../navigation/NavBar";
import BackgroundGrid from "../grid/BackgroundGrid";
import PixelTexture from "../common/PixelTexture";
import Shapes from "../decorative/Shapes";
import Footer from "../common/Footer";

type Page = 'home' | 'about' | 'projects' | 'articles' | 'que';

interface DesktopHomeLayoutProps {
    children: React.ReactNode;
    onNavigate: (page: Page) => void;
}

export default function DesktopHomeLayout({ children, onNavigate }: DesktopHomeLayoutProps) {
    return (
        <div className="bg-[#f7f4ed] relative w-full overflow-hidden" style={{ minHeight: '1100px' }} data-name="Home page">
            <BackgroundGrid />
            <Logo 
                variant="full"
                color="black"
                className="absolute h-[36px] left-[236px] top-[40px] w-[224px]"
            />
            <NavBar
                orientation="vertical"
                activePage="home"
                onNavigate={onNavigate}
            />
            <Shapes svgPaths={svgPaths} />
            {children}
            <Footer showSocials={true} />
            <PixelTexture />
        </div>
    );
}