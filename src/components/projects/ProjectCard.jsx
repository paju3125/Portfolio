import React from "react";

export default function ProjectCard({ img, title, desc, techs, link }) {
  return (
    <div className="project-card" data-aos="fade-up">
      <img src={img} alt={title} className="project-thumbnail" />
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description" dangerouslySetInnerHTML={{ __html: desc }}></p>
        
        <div className="tech-stack">
          {techs.map((tech, index) => (
            <span key={index} className="tech-badge">{tech[0]}</span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          <span>View Project</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
