import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "./internship.css";

// Experience data
const experienceData = [
  {
    id: "exp-1",
    company: "Ignite Solutions",
    title: "Software Engineer",
    period: "Jul 2024 - Present",
    logo: "/ignite_logo.png",
    projects: [
      {
        name: "Energy Management Platform",
        tasks: [
          "Contributed to a energy distribution platform using React and Flask.",
          "Enhanced functionality and performance through feature updates and bug fixes.",
          "Developed a new feature for detailed meter-level energy consumption breakdown.",
          "Managed end-to-end development, including frontend, backend, and deployment processes."
        ]
      },
      {
        name: "Chaturji - AI-Based Companion",
        tasks: [
          "Optimized and enhanced the Chaturji AI-based web application for real-time interaction.",
          "Implemented features such as real-time chat and a knowledge base for improved user engagement.",
          "Reduced load time by 55% through routing optimization and maintained web vital standards for responsive UX."
        ]
      },
      {
        name: "Pathology Web Platform",
        tasks: [
          "Designed and developed a user interface using Next.js and React tailored for medical professionals.",
          "Created an interface for high-resolution pathology slide analysis.",
          "Implemented server-side rendering (SSR) and optimized data fetching for performance."
        ]
      },
      {
        name: "AI Chatbot",
        tasks: [
          "Developed a chatbot leveraging Python, React, and Bootstrap for seamless user interaction.",
          "Integrated external AI APIs and internal databases to enhance functionality.",
          "Utilized Markdown for rendering user-friendly and structured output."
        ]
      },
    ],
    technologies: [
      "React", "Next.js", "Python", "Flask", "AWS", "Tailwind", "SQL"
    ]
  }
];

// Internship data
const internshipData = [
  {
    id: "intern-1",
    company: "Ignite Solutions",
    title: "Software Engineer Intern",
    period: "Jan 2024 - Jun 2024",
    logo: "/ignite_logo.png",
    description: [
      "Managed backend for 'Onboarding Automation' application using Django and MySQL",
      "Integrated GPT-4 and Gemini 1.5 via APIs for LLM enhancements"
    ],
    technologies: [
      "Django", "MySQL", "Python", "REST API", "GPT-4", "Gemini"
    ],
    repoLink: null
  },
  {
    id: "intern-2",
    company: "Result Software Development",
    title: "Lead Coordinator",
    period: "Jun 2023 - Aug 2023",
    logo: null,
    description: [
      "Led intern team in completing 'Automation in Recruitment Process' project",
      "Utilized Flask, ReactJS, and Machine Learning for efficient project execution"
    ],
    technologies: [
      "Flask", "ReactJS", "NLP", "SQL", "HTML", "CSS"
    ],
    repoLink: "https://github.com/answersindustries/recruitment-automation-system/tree/recruitment-automation-v1.0"
  },
  {
    id: "intern-3",
    company: "PixelStat eSolutions",
    title: "Full Stack Intern",
    period: "Jun 2022 - Oct 2022",
    logo: "/pixelstatLogo.jpg",
    description: [
      "Engineered a web app for 'AKHIL BHARATIYA MARATHI CHITRAPAT MAHAMANDAL'",
      "Enhanced data management, business logic, and reporting using Flask, SQL, and JavaScript"
    ],
    technologies: [
      "Flask", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"
    ],
    repoLink: "https://github.com/paju3125/PixelStat_ERP"
  },
  {
    id: "intern-4",
    company: "R B Tech Services",
    title: "Trainee PHP Developer",
    period: "Jun 2020 - Aug 2020",
    logo: "/rbtechLogo.png",
    description: [
      "Engineered a web-based 'Notice Management System' using PHP",
      "Acquired proficiency in PHP programming through hands-on experience on a live project"
    ],
    technologies: [
      "PHP", "SQL", "JavaScript", "Bootstrap", "HTML", "CSS"
    ],
    repoLink: null
  }
];

// Stats for each section
const professionalStats = [
  { metric: "1+", label: "Years Experience" },
  { metric: "3", label: "Major Projects" },
  { metric: "8+", label: "Technologies" },
  { metric: "1", label: "Companies" }
];

const internshipStats = [
  { metric: "1.5+", label: "Years Internship" },
  { metric: "4", label: "Internships" },
  { metric: "5+", label: "Technologies" },
  { metric: "4", label: "Companies" }
];

export default function Internships() {
  const [activeTab, setActiveTab] = useState("professional");
  const [selectedItem, setSelectedItem] = useState(0);
  const tabIndicatorRef = useRef(null);
  
  // Handle tab switching
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSelectedItem(0);
  };
  
  // Update tab indicator position
  useEffect(() => {
    const updateTabIndicator = () => {
      const activeTabElement = document.querySelector(`.tab-button[data-tab="${activeTab}"]`);
      if (activeTabElement && tabIndicatorRef.current) {
        tabIndicatorRef.current.style.left = `${activeTabElement.offsetLeft}px`;
        tabIndicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`;
      }
    };
    
    updateTabIndicator();
    window.addEventListener('resize', updateTabIndicator);
    
    return () => window.removeEventListener('resize', updateTabIndicator);
  }, [activeTab]);
  
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });
  }, []);
  
  // Get current data based on active tab
  const currentData = activeTab === "professional" ? experienceData : internshipData;
  const currentStats = activeTab === "professional" ? professionalStats : internshipStats;
  
  // Navigate through items
  const handleNext = () => {
    setSelectedItem((prev) => (prev + 1) % currentData.length);
  };
  
  const handlePrev = () => {
    setSelectedItem((prev) => (prev - 1 + currentData.length) % currentData.length);
  };
  
  return (
    <section id="experience" className="experience-section">
      <div className="container">
      <div className="workspace-header">
          <div className="workspace-controls">
            <div className="workspace-title">
              <span className="workspace-label">Professional Journey</span>
              <span className="workspace-path">~/portfolio/experience</span>
            </div>
          </div>
        </div>
        
        <div className="dev-editor">
          <div className="editor-tabs">
            <div className="tab-indicator" ref={tabIndicatorRef}></div>
            <button 
              className={`tab-button ${activeTab === "professional" ? "active" : ""}`}
              data-tab="professional"
              onClick={() => handleTabChange("professional")}
            >
              <i className="fas fa-briefcase"></i>
              Professional
            </button>
            <button 
              className={`tab-button ${activeTab === "internship" ? "active" : ""}`}
              data-tab="internship"
              onClick={() => handleTabChange("internship")}
            >
              <i className="fas fa-graduation-cap"></i>
              Internships
            </button>
          </div>

          <div className="editor-main">
            <div className="file-explorer">
              <div className="explorer-header">
                <span>TIMELINE</span>
              </div>
              <div className="explorer-content">
                {currentData.map((item, index) => (
                  <div 
                    key={item.id}
                    className={`file-item ${selectedItem === index ? 'active' : ''}`}
                    onClick={() => setSelectedItem(index)}
                  >
                    <i className={`fas ${selectedItem === index ? 'fa-folder-open' : 'fa-folder'}`}></i>
                    <div className="file-details">
                      <div className="file-name">{item.company}</div>
                      <div className="file-meta">{item.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="editor-content">
              {currentData.length > 0 ? (
                <div className="experience-display" key={currentData[selectedItem].id}>
                  <div className="experience-header" data-aos="fade-up">
                    <div className="company-logo">
                      {currentData[selectedItem].logo ? (
                        <img src={currentData[selectedItem].logo} alt={currentData[selectedItem].company} />
                      ) : (
                        <div className="logo-placeholder">
                          {currentData[selectedItem].company.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="company-info">
                      <h3>{currentData[selectedItem].company}</h3>
                      <h4>{currentData[selectedItem].title}</h4>
                      <div className="period">
                        <i className="far fa-calendar-alt"></i> {currentData[selectedItem].period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-body" data-aos="fade-up" data-aos-delay="100">
                    {activeTab === "professional" ? (
                      <div className="projects-section">
                        {currentData[selectedItem].projects.map((project, idx) => (
                          <div key={idx} className="project-item">
                            <div className="project-header">
                              <span className="comment-syntax">{'// '}</span>
                              {project.name}
                            </div>
                            <div className="project-tasks">
                              {project.tasks.map((task, taskIdx) => (
                                <div key={taskIdx} className="task-line">
                                  <span className="line-number">{taskIdx + 1}</span>
                                  <span className="function-syntax"></span>
                                  <span className="task-text">{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="internship-description">
                        <div className="code-block">
                          {currentData[selectedItem].description.map((desc, idx) => (
                            <div key={idx} className="code-line">
                              <span className="line-number">{idx + 1}</span>
                              <span className="comment-syntax">{'// '}</span>
                              <span className="description-text">{desc}</span>
                            </div>
                          ))}
                        </div>
                        
                        {currentData[selectedItem].repoLink && (
                          <a 
                            href={currentData[selectedItem].repoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="repo-link"
                          >
                            <i className="fab fa-github"></i> View Repository
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="experience-footer" data-aos="fade-up" data-aos-delay="200">
                    <div className="tech-header">
                      <span className="syntax-keyword">const</span> technologies <span className="syntax-operator">=</span> [
                    </div>
                    <div className="tech-stack">
                      {currentData[selectedItem].technologies.map((tech, idx) => (
                        <div key={idx} className="tech-badge">
                          <span className="string-quote">"</span>
                          <span className="tech-name">{tech}</span>
                          <span className="string-quote">"</span>
                          {idx < currentData[selectedItem].technologies.length - 1 && <span className="syntax-comma">,</span>}
                        </div>
                      ))}
                    </div>
                    <div className="tech-footer">];</div>
                  </div>
                </div>
              ) : (
                <div className="no-data-message">No experience data available</div>
              )}
            </div>
          </div>
          
          <div className="terminal-view">
            <div className="terminal-header">
              <span>STATISTICS</span>
            </div>
            <div className="terminal-content">
              <div className="command-line">
                <span className="prompt">$ </span>
                <span className="command">stats --show {activeTab}</span>
              </div>
              <div className="stats-grid">
                {currentStats.map((stat, idx) => (
                  <div key={idx} className="stat-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="stat-value">{stat.metric}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="editor-navigation">
            {currentData.length > 1 && (
              <>
                <button 
                  className="nav-button prev" 
                  onClick={handlePrev}
                  aria-label="Previous item"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="pagination">
                  {currentData.map((_, idx) => (
                    <button 
                      key={idx}
                      className={`page-dot ${selectedItem === idx ? 'active' : ''}`}
                      onClick={() => setSelectedItem(idx)}
                      aria-label={`Item ${idx + 1}`}
                    ></button>
                  ))}
                </div>
                <button 
                  className="nav-button next" 
                  onClick={handleNext}
                  aria-label="Next item"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
