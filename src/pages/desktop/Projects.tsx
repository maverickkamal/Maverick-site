
import DesktopPageLayout from "../../components/layouts/DesktopPageLayout";

type ProjectsProps = {
    onNavigate: (page: 'home' | 'about' | 'projects' | 'articles' | 'que') => void;
};

export default function Projects({ onNavigate }: ProjectsProps) {
    return (
        <DesktopPageLayout activePage="projects" onNavigate={onNavigate}>
            {/* Projects Content */}
            <div>
                <p className="absolute font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] left-[261px] text-[#1a1a1a] text-[36px] text-nowrap top-[240px] whitespace-pre">
                    projects
                </p>
                <p className="absolute font-['Outfit:SemiBold',sans-serif] font-medium leading-[normal] left-[261px] text-[24px] text-black text-nowrap top-[314px] whitespace-pre">
                    coming soon
                </p>
            </div>
        </DesktopPageLayout>
    );
}
