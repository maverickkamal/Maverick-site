import VerticalNav from './VerticalNav';
import BackgroundGrid from '../BackgroundGrid';


const HomeLayout = ({ children }) => {
    return (
        <div className="App container app-layout">
            <BackgroundGrid />
            <aside className="sidebar">
                <VerticalNav />
            </aside>
            <main className="main-content main-content-centered">
                {children}
            </main>
        </div>
    );
};

export default HomeLayout;
