import HorizontalNav from './HorizontalNav';
import { BackgroundGrid } from '../decorative';

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <BackgroundGrid />
      <div className="page-wrapper">
        <HorizontalNav />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
