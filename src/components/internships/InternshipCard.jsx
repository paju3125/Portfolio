import React from 'react'

export default function InternshipCard(props) {
    const formatDescription = (desc) => {
        // Check if string contains project markers (emojis or special formatting)
        const hasProjects = desc.some(item => item.includes('🤖') || item.includes('🚀') || item.includes('🔬'));
        
        if (hasProjects) {
            return desc.map((item, idx) => {
                if (item.includes('🤖') || item.includes('🚀') || item.includes('🔬')) {
                    return `<h4 class="project-title">${item}</h4>`;
                } else if (item === '') {
                    return '<br/>';
                } else {
                    return `<li>${item}</li>`;
                }
            }).join('');
        }
        
        // Simple bullet points for regular descriptions
        return desc.map(item => `<li>${item}</li>`).join('');
    };

    return (
        <div className="card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="card-header">
                <div className="company-logo">
                    {props.logo ? (
                        <img src={props.logo} alt={props.companyName} />
                    ) : (
                        <div className="logo-placeholder">{props.companyName[0]}</div>
                    )}
                </div>
                <div className="company-info">
                    <h3 className="company-name">{props.companyName}</h3>
                    <h4 className="job-title">{props.title}</h4>
                    <span className="duration">{props.duration}</span>
                </div>
            </div>
            
            <div className="card-content">
                <ul className="responsibilities"
                    dangerouslySetInnerHTML={{ 
                        __html: formatDescription(props.desc) 
                    }}
                />
                
            </div>
                <div className="tech-stack">
                    {props.techs.map((tech, index) => (
                        <span key={index} className={`tech-tag ${tech[1]}`}>
                            {tech[0]}
                        </span>
                    ))}
                </div>
            
            {props.link && (
                <div className="card-footer">
                    <button 
                        className="view-project"
                        onClick={() => window.open(props.link, "_blank")}
                    >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                            <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}
