import React from 'react';

const ArticleCard = ({ article }) => {
    const { title, excerpt, link, tags, publishedDate, readTime, coverImage, platform } = article;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const platformIcons = {
        'Medium': '📝',
        'substack': '📰',
        'Dev.to': '👩‍💻',
        'default': '📄'
    };

    return (
        <article className="article-card">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="article-card-link"
            >
                <div className="article-card-content">
                    {coverImage && (
                        <div className="article-image-wrapper">
                            <img 
                                src={coverImage} 
                                alt={title}
                                className="article-image"
                                loading="lazy"
                                onError={(e) => e.target.parentElement.style.display = 'none'}
                            />
                        </div>
                    )}
                    
                    <div className="article-details">
                        <div className="article-meta">
                            <span className="article-date">{formatDate(publishedDate)}</span>
                            {readTime && (
                                <>
                                    <span className="meta-separator">•</span>
                                    <span className="article-read-time">{readTime}</span>
                                </>
                            )}
                            {platform && (
                                <>
                                    <span className="meta-separator">•</span>
                                    <span className="article-platform">
                                        {platformIcons[platform] || platformIcons.default} {platform}
                                    </span>
                                </>
                            )}
                        </div>

                        <h3 className="article-title">{title}</h3>
                        
                        <p className="article-excerpt">{excerpt}</p>

                        <div className="article-tags">
                            {tags.map((tag) => (
                                <span key={tag} className="article-tag">{tag}</span>
                            ))}
                        </div>

                        <span className="article-read-more">
                            Read on {platform || 'Article'} →
                        </span>
                    </div>
                </div>
            </a>
        </article>
    );
};

export default ArticleCard;

