import React from 'react';

export default function InternshipCard(props) {
    const formatDescription = (desc) => {
        if (desc.some(item => item.includes('🤖') || item.includes('🚀') || item.includes('🔬'))) {
            return desc.map((item, idx) => {
                if (item.includes('🤖') || item.includes('🚀') || item.includes('🔬')) {
                    return (
                        <div key={idx} className="project-section">
                            <h4 className="project-title">{item}</h4>
                        </div>
                    );
                } else if (item === '') {
                    return <div key={idx} className="project-divider"></div>;
                } else {
                    return (
                        <div key={idx} className="project-detail">
                            <span className="bullet">•</span>
                            {item}
                        </div>
                    );
                }
            });
        }
        
        return desc.map((item, idx) => (
            <div key={idx} className="experience-detail">
                <span className="bullet">•</span>
                {item}
            </div>
        ));
    };

    return (
        <div className="modern-card" data-aos="fade-up">
            <div className="card-top">
                <div className="logo-section">
                    {props.logo ? (
                        <img src={props.logo} alt={props.companyName} />
                    ) : (
                        <div className="logo-placeholder">
                            <span>{props.companyName[0]}</span>
                            <div className="placeholder-blur"></div>
                        </div>
                    )}
                </div>
                
                <div className="company-section">
                    <h3>{props.companyName}</h3>
                    <h4>{props.title}</h4>
                    <div className="duration-badge">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>{props.duration}</span>
                    </div>
                </div>
            </div>

            <div className="card-content">
                <div className="description-section">
                    {formatDescription(props.desc)}
                </div>

                <div className="tech-section">
                    {props.techs.map((tech, index) => (
                        <div key={index} className={`tech-badge ${tech[1]}`}>
                            <span className="tech-dot"></span>
                            {tech[0]}
                        </div>
                    ))}
                </div>

                {props.link && (
                    <a href={props.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="view-project-link"
                    >
                        <span>View Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
}
