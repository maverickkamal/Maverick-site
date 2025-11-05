import { useState } from 'react';

type Page = 'home' | 'about' | 'projects' | 'articles' | 'que';

export default function App() {

  const [currentPage, setCurrentPage] = useState<Page>('home');


  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

 
  const renderDesktopPage = () => {
    switch (currentPage) {
      case 'home':

      return (
          <div>
            <h1>Home Page</h1>
            <nav>
              <button onClick={() => handleNavigate('about')}>Go to About</button>
            </nav>
          </div>
        );
      case 'about':
        return (
          <div>
            <h1>About Page</h1>
            <nav>
              <button onClick={() => handleNavigate('home')}>Go to Home</button>
            </nav>
          </div>
        );

        default:
        return (
          <div>
            <h1>Home Page</h1>
            <nav>
              <button onClick={() => handleNavigate('about')}>Go to About</button>
            </nav>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen overflow-auto">
      {renderDesktopPage()}
    </div>
  );
}