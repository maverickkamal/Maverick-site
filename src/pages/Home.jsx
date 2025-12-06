import TitleSvg from '../components/TitleSvg';
import ShapesDesktop from '../assets/images/shapes.svg';
import ShapesMobile from '../assets/images/shapesMobile.svg';

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-title">
                    <TitleSvg style={{ width: '100%', height: 'auto' }} />
                </div>

                <p className="hero-tagline">
                    A bio/AI/BME advocate and developer
                </p>

                <div className="hero-keywords">
                    <span>bio</span>
                    <span>ml</span>
                    <span>bme</span>
                    <span>dl</span>
                    <span>ai</span>
                </div>
            </div>

            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={ShapesMobile} />
                    <img
                        src={ShapesDesktop}
                        alt="Decorative Shapes"
                        className="hero-shapes"
                    />
                </picture>
            </div>
        </section>
    );
};

export default Home;
