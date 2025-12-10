import TitleSvg from '../components/TitleSvg';
import SocialLinks from '../components/common/SocialLinks';
import ShapesDesktop from '../assets/images/shapes.svg';
import ShapesMobile from '../assets/images/shapesMobile.svg';

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-title">
                    <TitleSvg />
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

                <div className="hero-social">
                    <SocialLinks />
                </div>

                <blockquote className="hero-quote">
                    "Human life is more important than politics, religion or culture"
                </blockquote>
            </div>

            <div className="hero-shapes-wrapper">
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
