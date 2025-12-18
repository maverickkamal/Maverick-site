import { useState, useMemo } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = useMemo(() => {
        const cats = new Set();
        projectsData.projects.forEach(p => {
            if (Array.isArray(p.category)) {
                p.category.forEach(cat => cats.add(cat));
            } else if (p.category) {
                cats.add(p.category);
            }
        });
        return ['all', ...Array.from(cats)];
    }, []);

    const filteredProjects = useMemo(() => {
        let projects = [...projectsData.projects];
        
        projects.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return (b.year || 0) - (a.year || 0);
        });

        if (activeFilter !== 'all') {
            projects = projects.filter(p => {
                if (Array.isArray(p.category)) {
                    return p.category.includes(activeFilter);
                }
                return p.category === activeFilter;
            });
        }

        return projects;
    }, [activeFilter]);

    return (
        <div className="projects-page page-container">
            <header className="page-header">
                <h1>Projects</h1>
                <p>Things I've built and experimented with</p>
            </header>

            <div className="filter-tabs">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
                        onClick={() => setActiveFilter(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p className="no-projects">No projects in this category yet.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
