const ProjectCard = ({ project }) => {
    const { name, about, link, liveDemo, languagesUsed, image, featured, status, year } = project;

    const statusColors = {
        active: 'status-active',
        maintained: 'status-maintained',
        archived: 'status-archived',
        buggy: 'status-buggy',
    };

    return (
        <article className={`project-card ${featured ? 'featured' : ''}`}>
            <div className="project-image-wrapper">
                {image ? (
                    <img 
                        src={image} 
                        alt={`${name} screenshot`} 
                        className="project-image"
                        loading="lazy"
                    />
                ) : (
                    <div className="project-image-placeholder">
                        <span className="placeholder-icon">📁</span>
                    </div>
                )}
                <div className="project-image-overlay">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-link"
                    >
                        View Project
                    </a>
                </div>
            </div>

            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-name">{name}</h3>
                    {status && (
                        <span className={`project-status ${statusColors[status] || ''}`}>
                            {status}
                        </span>
                    )}
                </div>

                {year && <span className="project-year">{year}</span>}

                <p className="project-about">{about}</p>

                <div className="project-tags">
                    {languagesUsed.map((lang) => (
                        <span key={lang} className="project-tag">{lang}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link primary"
                    >
                        <span>View Code</span>
                        <span className="link-arrow">→</span>
                    </a>
                    {liveDemo && liveDemo !== link && (
                        <a 
                            href={liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link secondary"
                        >
                            <span>Live Demo</span>
                            <span className="link-arrow">↗</span>
                        </a>
                    )}
                </div>
            </div>

            {featured && <span className="featured-badge">★ Featured</span>}
        </article>
    );
};

export default ProjectCard;



