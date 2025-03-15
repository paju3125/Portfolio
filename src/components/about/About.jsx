import React, { useState } from "react";
import "./about.css";

export default function About() {
  const [activeTab, setActiveTab] = useState('bio');
  
  return (
    <section id="about" className="dev-about-section">
      <div className="container">
      <div className="workspace-header">
          <div className="workspace-controls">
            <div className="workspace-title">
              <span className="workspace-label">developer-profile</span>
              <span className="workspace-path">~/portfolio/about-me</span>
            </div>
          </div>
          
        </div>
        <div className="terminal-chrome">          
          <div className="terminal-content">
            <div className="dev-profile">
              <div className="profile-sidebar">
                <div className="profile-image-container">
                  <img src="paju3.jpg" alt="Prajval Gandhi" className="dev-image" />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="profile-stats">
                  <div className="stats-item">
                    <span className="stats-icon">🚀</span>
                    <span className="stats-label">Projects</span>
                    <span className="stats-value">10+</span>
                  </div>
                  <div className="stats-item">
                    <span className="stats-icon">💻</span>
                    <span className="stats-label">Languages</span>
                    <span className="stats-value">6+</span>
                  </div>
                  <div className="stats-item">
                    <span className="stats-icon">⚡</span>
                    <span className="stats-label">Tech Stack</span>
                    <span className="stats-value">15+</span>
                  </div>
                </div>
                
                <div className="tech-badges">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">Django</span>
                  <span className="tech-badge">ML</span>
                </div>
              </div>
              
              <div className="profile-main">
                <div className="profile-header">
                  <h1 className="profile-name">Prajval Gandhi</h1>
                  <div className="profile-title">
                    <span className="code-tag">&lt;</span>
                    Software Engineer
                    <span className="code-tag">/&gt;</span>
                  </div>
                </div>
                
                <div className="profile-tabs">
                  <button 
                    className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('bio')}
                  >
                    Bio
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('skills')}
                  >
                    Skills
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'focus' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('focus')}
                  >
                    Focus
                  </button>
                </div>
                
                <div className="tab-content">
                  {activeTab === 'bio' && (
                    <div className="bio-content animate-fade">
                      <div className="code-styled-content">
                        {/* <div className="code-line">
                          <span className="code-keyword">const</span> <span className="code-variable">aboutMe</span> <span className="code-operator">=</span> <span className="code-bracket">{'{'}</span>
                        </div> */}
                        <div className="code-block">
                          <p className="code-comment"> Experienced software engineer</p>
                          <p>Specialized in modern web technologies with a focus on creating scalable and innovative solutions. I enjoy building end-to-end applications and solving complex problems through code.</p>
                          
                          <p className="code-comment"> Technical approach</p>
                          <p>With expertise in React.js, Python and machine learning, I develop high-performance applications that deliver exceptional user experiences.</p>
                        </div>
                        {/* <div className="code-line"><span className="code-bracket">{'}'}</span>;</div> */}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'skills' && (
                    <div className="skills-content animate-fade">
                      <div className="skills-grid">
                        <div className="skill-category">
                          <h3 className="category-title">Frontend</h3>
                          <ul className="skill-list">
                            <li><span className="skill-bullet">▹</span> React.js / Next.js</li>
                            <li><span className="skill-bullet">▹</span> TypeScript</li>
                            <li><span className="skill-bullet">▹</span> JavaScript</li>
                            <li><span className="skill-bullet">▹</span> CSS / Tailwind</li>
                          </ul>
                        </div>
                        
                        <div className="skill-category">
                          <h3 className="category-title">Backend</h3>
                          <ul className="skill-list">
                            <li><span className="skill-bullet">▹</span> Python / Django</li>
                            <li><span className="skill-bullet">▹</span> Flask</li>
                            <li><span className="skill-bullet">▹</span> Java</li>
                            <li><span className="skill-bullet">▹</span> RESTful APIs</li>
                          </ul>
                        </div>
                        
                        <div className="skill-category">
                          <h3 className="category-title">Database & Cloud</h3>
                          <ul className="skill-list">
                            <li><span className="skill-bullet">▹</span> MySQL / SQLite</li>
                            <li><span className="skill-bullet">▹</span> MongoDB</li>
                            <li><span className="skill-bullet">▹</span> AWS</li>
                          </ul>
                        </div>
                        
                        <div className="skill-category">
                          <h3 className="category-title">Tools</h3>
                          <ul className="skill-list">
                            <li><span className="skill-bullet">▹</span> Git / GitHub</li>
                            <li><span className="skill-bullet">▹</span> Ansible</li>
                            <li><span className="skill-bullet">▹</span> TensorFlow</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'focus' && (
                    <div className="focus-content animate-fade">
                      <div className="focus-areas">
                        <div className="focus-item">
                          <div className="focus-icon">🌐</div>
                          <div className="focus-details">
                            <h3>Full Stack Development</h3>
                            <p>Creating complete web solutions with modern tech stacks</p>
                          </div>
                        </div>
                        
                        <div className="focus-item">
                          <div className="focus-icon">🤖</div>
                          <div className="focus-details">
                            <h3>Machine Learning</h3>
                            <p>Building intelligent systems and ML integrations</p>
                          </div>
                        </div>
                        
                        <div className="focus-item">
                          <div className="focus-icon">☁️</div>
                          <div className="focus-details">
                            <h3>Cloud Applications</h3>
                            <p>Deploying scalable solutions on cloud platforms</p>
                          </div>
                        </div>
                        
                        <div className="focus-item">
                          <div className="focus-icon">📱</div>
                          <div className="focus-details">
                            <h3>UI/UX Design</h3>
                            <p>Creating intuitive and engaging user experiences</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="terminal-prompt">
                  <span className="prompt-user">developer</span>
                  <span className="prompt-separator">@</span>
                  <span className="prompt-host">portfolio</span>
                  <span className="prompt-location">:~$</span>
                  <span className="prompt-command"> connect</span>
                  <span className="cursor"></span>
                </div>
                
                <div className="social-links d-inline-flex">
                  <a href="https://github.com/paju3125" target="_blank" rel="noopener noreferrer" className="social-link tooltip" data-tooltip="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/prajval-gandhi-648504211/" target="_blank" rel="noopener noreferrer" className="social-link tooltip" data-tooltip="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:prajvalgandhi483@gmail.com" className="social-link tooltip" data-tooltip="Email">
                    <i className="fa fa-envelope text-light"></i>
                  </a>
                  <a href="/Prajval_Gandhi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                    <i className="fas fa-file-earmark-text"></i> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
