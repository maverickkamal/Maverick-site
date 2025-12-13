import { useState, useMemo } from 'react';
import ArticleCard from '../components/ui/ArticleCard';
import articlesData from '../data/articles.json';

const Articles = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const allTags = useMemo(() => {
        const tagsSet = new Set();
        articlesData.articles.forEach(article => {
            article.tags.forEach(tag => tagsSet.add(tag.toLowerCase()));
        });
        return ['all', ...Array.from(tagsSet)];
    }, []);

    const sortedAndFilteredArticles = useMemo(() => {
        let articles = [...articlesData.articles];
        
        articles.sort((a, b) => {
            return new Date(b.publishedDate) - new Date(a.publishedDate);
        });

        if (activeFilter !== 'all') {
            articles = articles.filter(article => 
                article.tags.some(tag => tag.toLowerCase() === activeFilter)
            );
        }

        return articles;
    }, [activeFilter]);

    const groupedByYear = useMemo(() => {
        const groups = {};
        sortedAndFilteredArticles.forEach(article => {
            const year = new Date(article.publishedDate).getFullYear();
            if (!groups[year]) {
                groups[year] = [];
            }
            groups[year].push(article);
        });
        return Object.entries(groups).sort((a, b) => b[0] - a[0]);
    }, [sortedAndFilteredArticles]);

    return (
        <div className="articles-page page-container">
            <header className="page-header">
                <h1>Articles</h1>
                <p>Thoughts, tutorials, and insights</p>
            </header>

            <div className="filter-tabs">
                {allTags.slice(0, 8).map((tag) => (
                    <button
                        key={tag}
                        className={`filter-tab ${activeFilter === tag ? 'active' : ''}`}
                        onClick={() => setActiveFilter(tag)}
                    >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                ))}
            </div>

            <div className="articles-timeline">
                {groupedByYear.length > 0 ? (
                    groupedByYear.map(([year, articles]) => (
                        <div key={year} className="year-group">
                            <h2 className="year-header">{year}</h2>
                            <div className="articles-list">
                                {articles.map((article) => (
                                    <ArticleCard key={article.id + article.title} article={article} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-articles">No articles with this tag yet.</p>
                )}
            </div>
        </div>
    );
};

export default Articles;
