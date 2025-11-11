import React from "react";
import DesktopHomeLayout from "../../components/layouts/DesktopHomeLayout";
import TagCloud from "../../components/decorative/TagCloud";


function HiImMaverick() {
  return (
    <div className="absolute contents left-[906px] top-[169px]" data-name="hi i'm maverick">
      <div className="absolute font-display font-extrabold leading-[normal] left-[906px] text-[64px] text-black text-nowrap top-[169px] whitespace-pre">
        <p className="mb-0 text-[#1a1a1a]">hi</p>
        <p className="mb-0 text-[#1a1a1a]">{`      i'm`}</p>
        <p className="text-[#006b3d]">maverick</p>
      </div>
      <div className="absolute h-[27px] left-[1276px] top-[313px] w-[26px]" data-name="accent">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(138, 85, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 27">
            <ellipse cx="13" cy="13.5" fill="var(--fill-0, #8A5500)" id="accent" rx="13" ry="13.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

type HomePageProps = {
    onNavigate: (page: 'home' | 'about' | 'projects' | 'articles' | 'que') => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
    return (
        <DesktopHomeLayout onNavigate={onNavigate}>
            <TagCloud />
            <HiImMaverick />
            <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] left-[623px] text-[#1a1a1a] text-[32px] top-[717px] w-[313px]">
                A bio/AI/BME advocate and developer.
            </p>
        </DesktopHomeLayout>
    );
}


