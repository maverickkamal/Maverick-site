import React from "react";
import DesktopPageLayout from "../../components/layouts/DesktopPageLayout";

type ArticlesProps = {
  onNavigate: (page: 'home' | 'about' | 'projects' | 'articles' | 'que') => void;
};

export default function Articles({ onNavigate }: ArticlesProps) {
  return (
    <DesktopPageLayout activePage="articles" onNavigate={onNavigate}>
      <div>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] left-[261px] text-[#1a1a1a] text-[36px] text-nowrap top-[240px] whitespace-pre">
          articles
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[24px] text-black text-nowrap top-[314px] whitespace-pre">
          coming soon
        </p>
      </div>
    </DesktopPageLayout>
  );
}
