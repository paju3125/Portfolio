import React, { useState, useEffect } from "react";
import "./projects.css";

const projects = [
  {
    id: "project-1",
    title: "FaceVibes",
    subtitle: "Facial Emotion Recognition System",
    cover: "/project-thumbnails/facevibes.png",
    logo: "😊",
    description: "Created FaceVibes system using VGG16 for intuitive computer interactions. Improved emotion recognition accuracy with multiple deep learning model comparison.",
    features: ["Real-time emotion detection", "Multiple model comparison", "Interactive UI", "High accuracy"],
    tech: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    links: [
      { type: "github", url: "https://github.com/paju3125/FaceMood" },
    ],

  },
  {
    id: "project-2",
    title: "PixelStat ERP",
    subtitle: "Enterprise Resource Planning System",
    cover: "/project-thumbnails/pixelstat-erp.png",
    logo: "📊",
    description: "Comprehensive ERP system for handling membership details, data processing, and report generation with detailed business analytics.",
    features: ["Data import from Excel", "CRUD operations", "Report generation", "Business analytics"],
    tech: ["Flask", "SQL", "Pandas", "JavaScript", "Bootstrap"],
    links: [
      { type: "github", url: "https://github.com/paju3125/PixelStat_ERP" },
    ],

  },
  {
    id: "project-3",
    title: "My Shows",
    subtitle: "Multiplex Ticket Booking System",
    cover: "/project-thumbnails/MyShows.png",
    logo: "🎭",
    description: "Advanced web-based ticket booking system with personalized recommendations and a seamless booking experience.",
    features: ["Seat selection", "Payment processing", "Recommendations", "Booking history"],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    links: [
      { type: "github", url: "https://github.com/paju3125/My-Shows" }
    ],

  },
  {
    id: "project-4",
    title: "SUMMARIZE.ME",
    subtitle: "Text Summarization Tool",
    cover: "/project-thumbnails/summarize-me.png",
    logo: "📝",
    description: "NLP-powered tool for creating concise summaries from lengthy text or URLs using advanced machine learning models.",
    features: ["URL content extraction", "Advanced NLP", "Adjustable summary length", "Multiple languages support"],
    tech: ["Flask", "Machine Learning", "NLP", "Bootstrap", "JavaScript"],
    links: [
      { type: "github", url: "https://github.com/paju3125/summarize.me" }
    ],

  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [showCode, setShowCode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [terminalText, setTerminalText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Simulate loading and terminal initialization
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Simulate a terminal showing project loading
    const typingInterval = setInterval(() => {
      const commands = [
        "cd ~/projects",
        "ls -la",
        "git status",
        "npm install",
        "npm start",
        "Loading project files...",
        "Ready!"
      ];

      setTerminalText(prev => {
        const nextIndex = prev.split('\n').length - 1;
        if (nextIndex >= commands.length) {
          clearInterval(typingInterval);
          return prev;
        }
        return prev + (prev ? '\n' : '') + `> ${commands[nextIndex]}`;
      });
    }, 300);

    // Check if we're on mobile and adjust explorer visibility
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(typingInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle tab change
  const handleTabChange = (isCodeTab) => {
    setShowCode(isCodeTab);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Workspace header remains as-is */}
        <div className="workspace-header">
          <div className="workspace-controls">
            <div className="workspace-title">
              <span className="workspace-label">Prajval's Projects</span>
              <span className="workspace-path">~/portfolio/projects</span>
            </div>
            {/* Hide mobile explorer toggle in new layout */}
          </div>
        </div>

        {isLoading ? (
          // ...existing loading container...
          <div className="loading-container">
            <div className="terminal-loader">
              <div className="terminal-header">
                <div className="terminal-title">console</div>
                <div className="terminal-controls">
                  <span className="control"></span>
                  <span className="control"></span>
                  <span className="control"></span>
                </div>
              </div>
              <div className="terminal-body">
                {terminalText.split('\n').map((line, i) => (
                  <div key={i} className="terminal-line">
                    <span className="terminal-prompt">{line}</span>
                    {i === terminalText.split('\n').length - 1 &&
                      <span className="terminal-cursor"></span>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )
          : (
            <>
              {isMobile ? (
                <div className="mobile-projects">
                  <div className="mobile-project-selector">
                    {projects.map(project => (
                      <div
                        key={project.id}
                        className={`project-card ${activeProject.id === project.id ? 'active' : ''}`}
                        onClick={() => setActiveProject(project)}
                      >
                        <span className="project-icon">{project.logo}</span>
                        <span className="project-title">{project.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mobile-project-detail">
                    <h1 className="project-title">{activeProject.title}</h1>
                    <span className="project-subtitle">{activeProject.subtitle}</span>
                    <div className="preview-container">
                      <img
                        src={activeProject.cover}
                        alt={activeProject.title}
                        className="preview-image"
                      />
                    </div>
                    <div className="markdown-section">
                      <h2>Description</h2>
                      <p>{activeProject.description}</p>
                    </div>
                    <div className="markdown-section">
                      <h2>Features</h2>
                      <ul className="feature-list">
                        {activeProject.features.map((feature, index) => (
                          <li key={index} className="feature-item">
                            <i className="bi bi-check2"></i> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="markdown-section">
                      <h2>Tech Stack</h2>
                      <div className="tech-tags">
                        {activeProject.tech.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            <span className="tech-dot"></span> {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="markdown-section">
                      <h2>Links</h2>
                      <div className="project-links">
                        {activeProject.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`repo-link ${link.type}`}
                          >
                            {link.type === 'github' ? (
                              <><i className="bi bi-github"></i> View on GitHub</>
                            ) : (
                              <><i className="bi bi-box-arrow-up-right"></i> Live Demo</>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="ide-container">
                  <div className="file-explorer">
                    <div className="explorer-header">
                      <span>EXPLORER</span>
                      <div className="explorer-actions">
                        <button className="explorer-button"><i className="bi bi-plus"></i></button>
                        <button className="explorer-button"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="explorer-button"><i className="bi bi-three-dots"></i></button>
                      </div>
                    </div>

                    <div className="explorer-section">
                      <div className="section-header">
                        <i className="bi bi-chevron-down"></i>
                        <span>PORTFOLIO</span>
                      </div>
                      <div className="section-content">
                        <div className="folder-item">
                          <i className="bi bi-folder-fill folder-icon"></i>
                          <span>src</span>
                        </div>
                        <div className="folder-item active">
                          <i className="bi bi-folder-fill folder-icon"></i>
                          <span>projects</span>
                        </div>
                        <div className="file-item">
                          <i className="bi bi-file-earmark-text file-icon"></i>
                          <span>README.md</span>
                        </div>
                        <div className="file-item">
                          <i className="bi bi-file-earmark-code file-icon"></i>
                          <span>package.json</span>
                        </div>
                      </div>
                    </div>

                    <div className="explorer-section">
                      <div className="section-header">
                        <i className="bi bi-chevron-down"></i>
                        <span>PROJECTS</span>
                      </div>
                      <div className="section-content">
                        {projects.map(project => (
                          <div
                            key={project.id}
                            className={`project-file ${activeProject.id === project.id ? 'active' : ''}`}
                            onClick={() => {
                              setActiveProject(project);
                              setShowCode(false);
                            }}
                          >
                            <span className="project-icon">{project.logo}</span>
                            <span className="file-name">{project.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="editor-pane">
                    <div className="editor-header">
                      <div className="editor-tabs">
                        <button
                          className={`editor-tab ${!showCode ? 'active' : ''}`}
                          onClick={() => handleTabChange(false)}
                        >
                          <i className="bi bi-markdown"></i> README.md
                        </button>
                      </div>
                      <div className="editor-actions">
                        <button className="editor-action"><i className="bi bi-split"></i></button>
                        <button className="editor-action"><i className="bi bi-layout-sidebar-reverse"></i></button>
                      </div>
                    </div>

                    <div className="editor-content">

                      <div className="readme-container">
                        <div className="markdown-header">
                          <h1 className="project-title">{activeProject.title}</h1>
                          <span className="project-subtitle">{activeProject.subtitle}</span>
                          <div className="status-badges">
                            <span className="status-badge"><i className="bi bi-star-fill"></i> Featured</span>
                            <span className="status-badge"><i className="bi bi-check-circle-fill"></i> Active</span>
                          </div>
                        </div>

                        <div className="preview-container">
                          <div className="preview-header">
                            <span>Preview</span>
                            <div className="preview-tools">
                              <button className="preview-tool"><i className="bi bi-arrows-angle-expand"></i></button>
                            </div>
                          </div>
                          <img
                            src={activeProject.cover}
                            alt={activeProject.title}
                            className="preview-image"
                          />
                        </div>

                        <div className="markdown-section">
                          <h2>Description</h2>
                          <p>{activeProject.description}</p>
                        </div>

                        <div className="markdown-section">
                          <h2>Features</h2>
                          <ul className="feature-list">
                            {activeProject.features.map((feature, index) => (
                              <li key={index} className="feature-item">
                                <i className="bi bi-check2"></i> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="markdown-section">
                          <h2>Tech Stack</h2>
                          <div className="tech-tags">
                            {activeProject.tech.map((tech, index) => (
                              <span key={index} className="tech-tag">
                                <span className="tech-dot"></span> {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="markdown-section">
                          <h2>Links</h2>
                          <div className="project-links">
                            {activeProject.links.map((link, index) => (
                              <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`repo-link ${link.type}`}
                              >
                                {link.type === 'github' ? (
                                  <><i className="bi bi-github"></i> View on GitHub</>
                                ) : (
                                  <><i className="bi bi-box-arrow-up-right"></i> Live Demo</>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              )}
              </>
          )}
            </div>
    </section>
  );
}
