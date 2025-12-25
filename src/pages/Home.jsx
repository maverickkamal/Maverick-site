import TitleSvg from '../components/TitleSvg';
import SocialLinks from '../components/common/SocialLinks';
import WebringLink from '../components/common/WebringLink';
import { Shapes, ShapesMobile } from '../components/decorative';

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
                    <span className="keyword-bio">bio</span>
                    <span className="keyword-ml">ml</span>
                    <span className="keyword-bme">bme</span>
                    <span className="keyword-dl">dl</span>
                    <span className="keyword-ai">ai</span>
                </div>

                <div className="hero-social">
                    <SocialLinks />
                </div>

                <blockquote className="hero-quote">
                    "Human life is more important than politics, religion or culture"
                </blockquote>

                <div className="hero-webring">
                    <WebringLink />
                </div>
            </div>

            <div className="hero-shapes-wrapper">
                <Shapes className="hero-shapes hero-shapes-desktop" />
                <ShapesMobile className="hero-shapes hero-shapes-mobile" />
            </div>
        </section>
    );
};

export default Home;
