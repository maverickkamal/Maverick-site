import { useState, useEffect } from "react";
import HomePage from "./pages/desktop/HomePage";

type Page = 'home' | 'about' | 'projects' | 'articles' | 'que';

export default function App() {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    useEffect(() => {
        // Logic to handle page changes can be added here
    }, [currentPage]);

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
    };

    const renderDesktopPage = () => {
        switch (currentPage) {
            case 'home':
              return <HomePage onNavigate={handleNavigate} />;
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