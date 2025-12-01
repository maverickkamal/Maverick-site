import React from 'react';
import TitleSvg from './TitleSvg';
import ShapesDesktop from '../assets/images/shapes.svg';
import ShapesMobile from '../assets/images/shapesMobile.svg';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            flex: 1,
        }}>
            <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <div className="hero-title">
                    <TitleSvg style={{ width: '100%', height: 'auto' }} />
                </div>

                <p style={{ fontSize: '1.8rem', fontFamily: 'var(--font-outfit)', color: 'var(--secondary-color)', marginBottom: '1.5rem', fontWeight: 300 }}>
                    A bio/AI/BME advocate and developer
                </p>
                <div className="flex gap-8" style={{ fontFamily: 'var(--font-syne)', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary-color)' }}>
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

export default Hero;
