import useMenuState from '../../hooks/useMenuState';
import VerticalNav from './VerticalNav';
import BackgroundGrid from '../BackgroundGrid';


const HomeLayout = ({ children }) => {
    const { isOpen, toggle } = useMenuState();

    return (
        <div className={`App container app-layout ${isOpen ? 'menu-open' : ''}`}>
            <BackgroundGrid />
            <aside className="sidebar">
                <VerticalNav isOpen={isOpen} toggle={toggle} />
            </aside>
            <main className="main-content main-content-centered">
                {children}
            </main>
        </div>
    );
};

export default HomeLayout;
