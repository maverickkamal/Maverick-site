import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="not-found-content">
                <div className="not-found-glitch" data-text="404">404</div>
                <h1 className="not-found-title">Page Not Found</h1>
                <p className="not-found-message">
                    Looks like you've wandered into uncharted territory. 
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="not-found-actions">
                    <Link to="/" className="not-found-btn primary">
                        Go Home
                    </Link>
                    <Link to="/projects" className="not-found-btn secondary">
                        View Projects
                    </Link>
                </div>
                <div className="not-found-decoration">
                    <span className="floating-char">{'{'}</span>
                    <span className="floating-char">?</span>
                    <span className="floating-char">{'}'}</span>
                    <span className="floating-char">*</span>
                    <span className="floating-char">_</span>
                </div>
            </div>
        </section>
    );
};

export default NotFound;

