import profilePic from '../assets/images/profile_pic.png';

const About = () => {
    const profileConfig = {
        imagePath: profilePic,
        name: 'Maverick',
        role: 'maybe a dev?',
        focus: 'Bioinformatics & AI (not sure yet)',
        status: 'wanna go to University',
        motto: '"Versatility is cool"',
    };

    const githubUsername = 'maverickkamal';
    const hackatimeUsername = '981';

    const frameworkIcons = {
        'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
        'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        'scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
        'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        'Google ADK': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
        'Streamlit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
        'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
        'Cpal': null,
    };

    const skills = {
        languages: [
            { name: 'Python', level: 85 },
            { name: 'Rust', level: 50 },
            { name: 'C++', level: 5 },
            { name: 'C', level: 5 },
            { name: 'JavaScript', level: 80 },
            { name: 'TypeScript', level: 60 },
            { name: 'Go', level: 50 },
            { name: 'R', level: 20 },
            { name: 'SQL', level: 100 },
        ],
        frameworks: ['React', 'Next.js', 'Angular', 'Tailwind', 'PyTorch', 'FastAPI', 'scikit-learn', 'Pandas', 'Google ADK', 'Streamlit', 'Flask', 'Cpal'],
        interests: ['Biology', 'History', 'Mathematics', 'Astronomy', 'Design', 'Machine Learning', 'BME', 'Artificial Intelligence', 'Deep Learning', 'Bioinformatics', 'Cooking', 'Chess', 'Economics', 'Music'],
    };

    return (
        <div className="about-page page-container">
            <section className="profile-section">
                <div className="profile-card">
                    <div className="profile-avatar">
                        {profileConfig.imagePath ? (
                            <img 
                                src={profileConfig.imagePath} 
                                alt="Profile" 
                                className="profile-image"
                            />
                        ) : (
                            <div className="avatar-placeholder">
                                <span>M</span>
                            </div>
                        )}
                    </div>
                    <div className="profile-info">
                        <div className="profile-field">
                            <span className="field-label">NAME:</span>
                            <span className="field-value">{profileConfig.name}</span>
                        </div>
                        <div className="profile-field">
                            <span className="field-label">ROLE:</span>
                            <span className="field-value">{profileConfig.role}</span>
                        </div>
                        <div className="profile-field">
                            <span className="field-label">FOCUS:</span>
                            <span className="field-value">{profileConfig.focus}</span>
                        </div>
                        <div className="profile-field">
                            <span className="field-label">STATUS:</span>
                            <span className="field-value status-active">{profileConfig.status}</span>
                        </div>
                        <p className="profile-motto">{profileConfig.motto}</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>ABOUT ME</h2>
                <div className="about-content">
                    <p>
                        An 18 yrs old with obsession of building stuff. I love to code and learn new things.
                    </p>
                    <p>
                        I have a strong drive for biology and technology in general. The intersection of the two is what fascinatess me ig.
                    </p>
                    <p>
                       uhh what else should I say? I'm just a normal guy who likes to code and build stuff.
                    </p>
                </div>
            </section>

            <section className="about-section">
                <h2>GITHUB ACTIVITY</h2>
                <div className="github-activity-wrapper">
                    <p className="github-link">
                        View my complete profile and contributions at{' '}
                        <a 
                            href={`https://github.com/${githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-profile-link"
                        >
                            github.com/{githubUsername}
                        </a>
                    </p>
                    <div className="github-contribution-graph">
                        <img 
                            src={`https://ghchart.rshah.org/006B3D/${githubUsername}`}
                            alt="GitHub Contribution Graph"
                            className="contribution-chart"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>CODING ACTIVITY</h2>
                <div className="coding-activity">
                    <a 
                        href={`https://hackatime.hackclub.com/@${hackatimeUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://github-readme-stats.hackclub.dev/api/wakatime?username=981&api_domain=hackatime.hackclub.com&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8&theme=solarized-light"
                            alt="Hackatime Stats"
                            className="hackatime-stats-card"
                        />
                    </a>
                    <p className="activity-link">
                        Click the card or{' '}
                        <a 
                            href={`https://hackatime.hackclub.com/@${hackatimeUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hackatime-profile-link"
                        >
                            visit my Hackatime profile
                        </a>
                    </p>
                </div>
            </section>

            <section className="about-section">
                <h2>SKILLS & TECHNOLOGIES</h2>
                <div className="skills-container">
                    <div className="skills-category">
                        <h3>Languages</h3>
                        <div className="skill-bars">
                            {skills.languages.map((skill) => (
                                <div key={skill.name} className="skill-bar">
                                    <div className="skill-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-track">
                                        <div 
                                            className="skill-fill" 
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Frameworks & Tools</h3>
                        <div className="skill-tags">
                            {skills.frameworks.map((framework) => (
                                <span key={framework} className="skill-tag framework-tag">
                                    {frameworkIcons[framework] && (
                                        <img 
                                            src={frameworkIcons[framework]} 
                                            alt={framework}
                                            className="framework-icon"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    )}
                                    {framework}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Interests</h3>
                        <div className="skill-tags interests">
                            {skills.interests.map((interest) => (
                                <span key={interest} className="skill-tag interest-tag">{interest}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
