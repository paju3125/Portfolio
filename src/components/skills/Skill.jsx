import React, { useState, useEffect } from "react";
import "./skill.css";

const skills = [
  {
    category: "Frontend Development",
    icon: "🌐",
    items: [
      { name: "React.js", logo: "/logos/react.svg", level: 85 },
      { name: "Next.js", logo: "/logos/next-js.svg", level: 75 },
      { name: "TypeScript", logo: "/logos/typescript.svg", level: 80 },
      { name: "JavaScript", logo: "/logos/javascript.svg", level: 80 },
      { name: "HTML", logo: "/logos/html.svg", level: 95 },
      { name: "CSS", logo: "/logos/css.svg", level: 90 },
      { name: "Tailwind", logo: "/logos/tailwind.svg", level: 85 },
      { name: "Bootstrap", logo: "/logos/bootstrap.svg", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    items: [
      { name: "Python", logo: "/logos/python.svg", level: 85 },
      { name: "Django", logo: "/logos/django.svg", level: 70 },
      { name: "Flask", logo: "/logos/flask.svg", level: 80 },
      { name: "Java", logo: "/logos/java.svg", level: 70 },
      { name: "C++", logo: "/logos/c.svg", level: 80 },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "☁️",
    items: [
      { name: "MySQL", logo: "/logos/mysql.svg", level: 85 },
      { name: "MongoDB", logo: "/logos/mongodb.svg", level: 80 },
      { name: "SQLite", logo: "/logos/sqlite.svg", level: 75 },
      { name: "AWS", logo: "/logos/aws.svg", level: 70 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    items: [
      { name: "Git", logo: "/logos/git.svg", level: 80 },
      { name: "Ansible", logo: "/logos/ansible.svg", level: 70 },
      { name: "TensorFlow", logo: "/logos/tensorflow.svg", level: 70 },
    ],
  },
];

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  
  useEffect(() => {
    // Set animation flag after component mounts for entrance animation
    setIsAnimated(true);
    
    // Terminal typing effect
    const lines = [
      "loading skill matrix...",
      "importing dependencies...",
      "scanning proficiencies...",
      "analyzing competency levels...",
      "rendering skill interface..."
    ];
    
    let lineIndex = 0;
    const typingInterval = setInterval(() => {
      if (lineIndex < lines.length) {
        setTerminalLines(prev => [...prev, lines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 600);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section id="skills" className={`skills-section ${isAnimated ? 'animated' : ''}`}>
      <div className="container">
      <div className="workspace-controls">
            {/* <div className="workspace-actions">
              <button className="action-button"><i className="bi bi-layout-sidebar"></i></button>
              <button className="action-button"><i className="bi bi-arrows-angle-expand"></i></button>
              <button className="action-button"><i className="bi bi-gear"></i></button>
            </div> */}
            <div className="workspace-title">
              <span className="workspace-label">Technical Profitiency</span>
              <span className="workspace-path">~/portfolio/skills</span>
            </div>
          </div>
        <div className="editor-container">
          <div className="editor-header">
            <div className="editor-tabs">
              <div className="editor-tab active">
                <span className="tab-icon">💻</span>
                <span>skills.js</span>
                <button className="tab-close">×</button>
              </div>
              {/* <div className="editor-tab">
                <span className="tab-icon">📄</span>
                <span>experience.js</span>
                <button className="tab-close">×</button>
              </div> */}
            </div>
            <div className="editor-actions">
              <div className="window-controls">
                <div className="control minimize"></div>
                <div className="control maximize"></div>
                <div className="control close"></div>
              </div>
            </div>
          </div>
          
          <div className="editor-body">
            <div className="editor-sidebar">
              <div className="section-title">
                <span className="code-comment">{'// My Tech Stack'}</span>
                {/* <h2 className="project-title">Skills & Expertise</h2> */}
                <div className="subtitle">Technical capabilities that power my development workflow</div>
              </div>
              
              <div className="category-nav">
                {skills.map((category, idx) => (
                  <button
                    key={idx}
                    className={`category-button ${activeCategory === idx ? 'active' : ''}`}
                    onClick={() => setActiveCategory(idx)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.category}</span>
                    {activeCategory === idx && <span className="active-marker"></span>}
                  </button>
                ))}
              </div>
              
              <div className="terminal-panel">
                <div className="terminal-header">
                  <span>TERMINAL</span>
                </div>
                <div className="terminal-content">
                  {terminalLines.map((line, i) => (
                    <div key={i} className="terminal-line">
                      <span className="terminal-prompt">$</span> {line}
                    </div>
                  ))}
                  <div className="terminal-line current">
                    <span className="terminal-prompt">$</span> <span className="cursor"></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="editor-content">
              <div className="editor-view">
                <div className="category-title">
                  <h3>{skills[activeCategory].category}</h3>
                </div>
                
                <div className="skills-grid">
                  {skills[activeCategory].items.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`skill-card ${hoveredSkill === idx ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredSkill(idx)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      data-level={`${skill.level}%`}
                    >
                      <div className="skill-inner">
                        <div className="skill-top">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="skill-icon"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/logos/default.svg";
                            }}
                          />
                          <span className="skill-level-indicator">{skill.level}%</span>
                        </div>
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <div className="skill-level-bar">
                            <div className="level-track">
                              <div
                                className="level-fill"
                                style={{ width: `${skill.level}%` }}
                              >
                                <span className="level-glow"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="skill-hover-content">
                          <div className="skill-tag">{`<${skill.name} />`}</div>
                          <div className="skill-details">
                            <div className="detail-item">
                              <span className="detail-label">Proficiency:</span>
                              <span className="detail-value">{getSkillLevel(skill.level)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get skill level label
function getSkillLevel(level) {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 60) return "Intermediate";
  return "Beginner";
}
