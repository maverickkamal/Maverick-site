import React from "react";
import DesktopPageLayout from "../../components/layouts/DesktopPageLayout";

type AboutProps = {
  onNavigate: (page: 'home' | 'about' | 'projects' | 'articles' | 'que') => void;
};

export default function About({ onNavigate }: AboutProps) {
  return (
    <DesktopPageLayout activePage="about" onNavigate={onNavigate}>
      <div>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] left-[261px] text-[#1a1a1a] text-[36px] text-nowrap top-[240px] whitespace-pre">
          about me :)
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[#1a1a1a] text-[24px] text-nowrap top-[308px] whitespace-pre">
          hi iam kamaludeen aka kamal - maverick - mav
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[#1a1a1a] text-[24px] text-nowrap top-[347px] whitespace-pre">
          iam a polymath imo. former ambivert (found more fluid form which is all)
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[#1a1a1a] text-[24px] text-nowrap top-[390px] whitespace-pre">
          iam onsessed with technology which led me to
        </p>
        
        <p className="absolute font-['Syne:SemiBold',sans-serif] font-semibold leading-[normal] left-[759px] text-[#c91f1f] text-[48px] text-nowrap top-[375px] whitespace-pre">
          ai
        </p>
        
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[816px] text-[#1a1a1a] text-[24px] text-nowrap top-[384px] whitespace-pre">
          {`with all the branches of ai `}
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[262px] text-[#1a1a1a] text-[24px] text-nowrap top-[433px] whitespace-pre">
          {`i chose `}
        </p>
        
        <p className="absolute font-['Syne:SemiBold',sans-serif] font-semibold leading-[normal] left-[341px] text-[#8a5500] text-[48px] text-nowrap top-[412px] whitespace-pre">
          ml
        </p>
        
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[411px] text-[#1a1a1a] text-[24px] text-nowrap top-[433px] whitespace-pre">
          which span different branches also. my love for medicine and
        </p>
        
        <p className="absolute font-['Syne:SemiBold',sans-serif] font-semibold leading-[normal] left-[1063px] text-[#006b3d] text-[48px] text-nowrap top-[412px] whitespace-pre">
          bio
        </p>
        
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[#1a1a1a] text-[24px] text-nowrap top-[472px] whitespace-pre">
          made me eager to find the intersection of ai and bio which was
        </p>
        
        <p className="absolute font-['Syne:SemiBold',sans-serif] font-semibold leading-[normal] left-[930px] text-[#bfbfbf] text-[48px] text-nowrap top-[452px] whitespace-pre">
          bme
        </p>
        
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[1052px] text-[#1a1a1a] text-[24px] text-nowrap top-[467px] whitespace-pre">
          {`but pure ml `}
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[262px] text-[#1a1a1a] text-[24px] text-nowrap top-[521px] whitespace-pre">
          {`won't cut it. i need the neural nets `}
        </p>
        
        <p className="absolute font-['Syne:SemiBold',sans-serif] font-semibold leading-[normal] left-[627px] text-[#8a5500] text-[48px] text-nowrap top-[500px] whitespace-pre">
          dl
        </p>
        
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[684px] text-[#1a1a1a] text-[24px] text-nowrap top-[515px] whitespace-pre">
          {`which is the most intricate, complex ,  enjoyable `}
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[#1a1a1a] text-[24px] text-nowrap top-[571px] whitespace-pre">
          and beautiful part of machine. it boosted my obsession. this just my current path but theres more
        </p>
        <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[#1a1a1a] text-[24px] text-nowrap top-[612px] whitespace-pre">
          {`through my curiosity i've honed skills from graphics, ui, motion design + photography, videography `}
        </p>
      </div>
    </DesktopPageLayout>
  );
}
