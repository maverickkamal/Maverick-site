import { useState } from 'react';
import HomePage from './imports/HomePage'; 

type Page = 'home' | 'about' | 'projects' | 'articles' | 'que';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderDesktopPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      
      case 'about':
        return <div>About Page Placeholder</div>;
      case 'projects':
        return <div>Projects Page Placeholder</div>;
      case 'articles':
        return <div>Articles Page Placeholder</div>;
      case 'que':
        return <div>Que Page Placeholder</div>;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="w-full h-screen overflow-auto">
      {renderDesktopPage()}
    </div>
  );
}