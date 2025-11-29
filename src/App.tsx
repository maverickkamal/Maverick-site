import { useState, useEffect } from "react";
import HomePage from "./pages/desktop/HomePage";
import About from "./pages/desktop/About";
import Projects from "./pages/desktop/Projects";
import Articles from "./pages/desktop/Articles";

type Page = 'home' | 'about' | 'projects' | 'articles' | 'que';

export default function App() {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    useEffect(() => {
    }, [currentPage]);

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
    };

    const renderDesktopPage = () => {
        switch (currentPage) {
            case 'home':
              return <HomePage onNavigate={handleNavigate} />;
            case 'about':
              return <About onNavigate={handleNavigate} />;
            case 'projects':
              return <Projects onNavigate={handleNavigate} />;
            case 'articles':
              return <Articles onNavigate={handleNavigate} />;
            default:
              return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
        {renderDesktopPage()}
      </div>
    );
}