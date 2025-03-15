import React, { useState, useEffect, useRef } from 'react';
import './resume.css';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('experience');
  const [lineNumbers, setLineNumbers] = useState(true);
  const [terminalLines, setTerminalLines] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Refs for all scrollable elements
  const editorBodyRef = useRef(null);
  const terminalContentRef = useRef(null);
  const jsonContentRef = useRef(null);
  
  // Timeout ID for scroll detection
  const scrollTimeoutRef = useRef(null);
  
  // Handle scroll events to show/hide scrollbars
  const handleScroll = (event) => {
    const element = event.target;
    
    // Add scrolling class
    element.classList.add('scrolling');
    
    // Clear previous timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Set timeout to remove scrolling class after scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      element.classList.remove('scrolling');
    }, 1000); // Scrollbar remains visible for 1 second after scrolling stops
  };
  
  // Attach scroll event listeners
  useEffect(() => {
    const editorBody = editorBodyRef.current;
    const terminalContent = terminalContentRef.current;
    const jsonContent = jsonContentRef.current;
    
    if (editorBody) editorBody.addEventListener('scroll', handleScroll);
    if (terminalContent) terminalContent.addEventListener('scroll', handleScroll);
    if (jsonContent) jsonContent.addEventListener('scroll', handleScroll);
    
    return () => {
      if (editorBody) editorBody.removeEventListener('scroll', handleScroll);
      if (terminalContent) terminalContent.removeEventListener('scroll', handleScroll);
      if (jsonContent) jsonContent.removeEventListener('scroll', handleScroll);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSection]); // Re-attach when active section changes
  
  // JSON content for each section
  const experienceJson = `{
  "experience": [
    {
      "title": "Software Engineer",
      "company": "Ignite Solutions",
      "period": "Jul 2024 - Present",
      "responsibilities": [
        "Developed AI Chatbot for querying internal teamwork details",
        "Designed UI for a large-scale digital pathology platform using Next.js and React",
        "Contributed to the development and optimization of the Chaturji AI-based web application"
      ]
    },
    {
      "title": "Software Engineer Intern",
      "company": "Ignite Solutions",
      "period": "Jan 2024 - Jun 2024",
      "responsibilities": [
        "Managed backend for 'Onboarding Automation' application using Django and MySQL",
        "Integrated GPT-4 and Gemini 1.5 via APIs for LLM enhancements"
      ]
    },
    {
      "title": "Full Stack Intern",
      "company": "PixelStat eSolutions",
      "period": "Jun 2022 - Oct 2022",
      "responsibilities": [
        "Fixed bugs in existing projects and improved system stability",
        "Developed a web application for AKHIL BHARATIYA MARATHI CHITRAPAT MAHAMANDAL"
      ]
    }
  ]
}`;

  const educationJson = `{
  "education": [
    {
      "degree": "B.Tech. - Information Technology",
      "institution": "MIT Academy of Engineering, Pune",
      "period": "2021 - 2024",
      "gpa": "9.37 / 10"
    },
    {
      "degree": "Diploma - Computer Engineering",
      "institution": "Government Polytechnic Ahmednagar",
      "period": "2018 - 2021",
      "percentage": "94.69%"
    }
  ]
}`;

  const skillsJson = `{
  "technicalSkills": {
    "languages": [
      "JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"
    ],
    "frontEnd": [
      "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"
    ],
    "backEnd": [
      "Node.js", "Django", "Flask", "Express.js", "RESTful APIs"
    ],
    "databases": [
      "MySQL", "MongoDB", "PostgreSQL", "SQLite"
    ],
    "devOps": [
      "Git", "GitHub Actions", "Docker", "AWS", "Vercel"
    ],
    "aiMl": [
      "TensorFlow", "PyTorch", "LLM Integration", "OpenAI API"
    ]
  }
}`;

  const contactJson = `{
  "name": "Prajval Gandhi",
  "location": "Pimpri-Chinchwad, Maharashtra, India - 411061",
  "email": "prajvalgandhi483@gmail.com",
  "phone": "+91-9665656267",
  "linkedIn": "https://www.linkedin.com/in/prajval-gandhi-648504211/",
  "github": "https://github.com/paju3125/",
  "website": "https://prajvalgandhi.vercel.app",
  "available": true
}`;

  // Create line-numbered versions of the content
  const createLineNumberedContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, index) => (
      <div key={index} className="code-line">
        {lineNumbers && <span className="line-number">{index + 1}</span>}
        <span className="line-content">{line}</span>
      </div>
    ));
  };

  // Get current file content based on active section
  const getCurrentContent = () => {
    switch(activeSection) {
      case 'experience': return experienceJson;
      case 'education': return educationJson;
      case 'skills': return skillsJson;
      case 'contact': return contactJson;
      default: return '';
    }
  };
  
  const handleDownload = () => {
    addTerminalLine("./download_resume.sh", "command");
    addTerminalLine("Downloading resume...", "output");
    
    setTimeout(() => {
      window.open("/Prajval_Gandhi_Resume.pdf", "_blank");
      addTerminalLine("Resume downloaded successfully!", "success");
    }, 800);
  };
  
  const addTerminalLine = (text, type) => {
    setTerminalLines(prev => [...prev, { text, type }]);
    
    setTimeout(() => {
      const terminal = terminalContentRef.current;
      if (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
      }
    }, 50);
  };
  
  // Initialize terminal lines
  useEffect(() => {
    setTimeout(() => {
      addTerminalLine("cd ~/portfolio/resume", "command");
      addTerminalLine("ls -la", "command");
      addTerminalLine("total 5", "output");
      addTerminalLine("-rw-r--r--  1 developer staff  982 May 15 14:30 experience.json", "output");
      addTerminalLine("-rw-r--r--  1 developer staff  417 May 15 14:30 education.json", "output");
      addTerminalLine("-rw-r--r--  1 developer staff  675 May 15 14:30 skills.json", "output");
      addTerminalLine("-rw-r--r--  1 developer staff  328 May 15 14:30 contact.json", "output");
    }, 1000);
  }, []);

  // Get file size classifications to determine if scrolling is needed
  const isLargeFile = activeSection === 'experience';

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="editor-header">
          <div className="workspace-title">
            <span className="workspace-label">career-profile.json</span>
            <span className="workspace-path">~/portfolio/resume</span>
          </div>
          <div className="workspace-actions">
            <button 
              className="action-button"
              onClick={() => setLineNumbers(!lineNumbers)}
              title="Toggle line numbers"
            >
              <i className={`fas ${lineNumbers ? 'fa-list-ol' : 'fa-list'}`}></i>
            </button>
            <button 
              className="download-button"
              onClick={handleDownload}
              title="Download Resume"
            >
              <i className="fas fa-download"></i> Download PDF
            </button>
          </div>
        </div>
        
        <div className="code-editor">
          <div className="editor-sidebar">
            <div className="explorer-panel">
              <div className="panel-header">
                <span>EXPLORER</span>
              </div>
              <div className="file-tree">
                <div className="folder expanded">
                  <div className="folder-name">
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-folder-open folder-icon"></i>
                    <span>resume</span>
                  </div>
                  <div className="file-list">
                    <div 
                      className={`file ${activeSection === 'experience' ? 'active' : ''}`}
                      onClick={() => setActiveSection('experience')}
                    >
                      <i className="fas fa-file-code file-icon"></i>
                      <span>experience.json</span>
                    </div>
                    <div 
                      className={`file ${activeSection === 'education' ? 'active' : ''}`}
                      onClick={() => setActiveSection('education')}
                    >
                      <i className="fas fa-file-alt file-icon"></i>
                      <span>education.json</span>
                    </div>
                    <div 
                      className={`file ${activeSection === 'skills' ? 'active' : ''}`}
                      onClick={() => setActiveSection('skills')}
                    >
                      <i className="fas fa-file-code file-icon"></i>
                      <span>skills.json</span>
                    </div>
                    <div 
                      className={`file ${activeSection === 'contact' ? 'active' : ''}`}
                      onClick={() => setActiveSection('contact')}
                    >
                      <i className="fas fa-address-card file-icon"></i>
                      <span>contact.json</span>
                    </div>
                    <div 
                      className={`file ${activeSection === 'summary' ? 'active' : ''}`}
                      onClick={() => setActiveSection('summary')}
                    >
                      <i className="fas fa-file-medical-alt file-icon"></i>
                      <span>summary.md</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="terminal-panel">
              <div className="panel-header">
                <span>TERMINAL</span>
              </div>
              <div 
                className="terminal-content"
                ref={terminalContentRef}
              >
                {terminalLines.map((line, index) => (
                  <div key={index} className={`terminal-line ${line.type}`}>
                    {line.type === 'command' && <span className="prompt">$</span>}
                    <span className="text">{line.text}</span>
                  </div>
                ))}
                <div className="terminal-line current">
                  <span className="prompt">$</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="editor-content">
            <div className="editor-tabs">
              <div className={`editor-tab active`}>
                {activeSection === 'experience' && 'experience.json'}
                {activeSection === 'education' && 'education.json'}
                {activeSection === 'skills' && 'skills.json'}
                {activeSection === 'contact' && 'contact.json'}
                {activeSection === 'summary' && 'summary.md'}
              </div>
            </div>
            
            <div 
              className={`editor-body ${isLargeFile ? 'scrollable' : 'full-height'}`}
              ref={editorBodyRef}
            >
              {(activeSection === 'experience' || activeSection === 'education' || 
                activeSection === 'skills' || activeSection === 'contact') && (
                <div 
                  className="json-content"
                  ref={jsonContentRef}
                >
                  <div className="code-container">
                    {createLineNumberedContent(getCurrentContent())}
                  </div>
                </div>
              )}
              
              {activeSection === 'summary' && (
                <div className="markdown-content">
                  <div className="markdown-body">
                    <h1>Professional Summary</h1>
                    <blockquote>
                      <p>Software Engineer with expertise in full-stack development, specializing in Next.js, React, Python, and Django. Experienced in integrating Generative AI into applications, optimizing performance, and building scalable web solutions.</p>
                    </blockquote>
                    <h2>Key Strengths</h2>
                    <ul>
                      <li><strong>Frontend Development</strong> - Modern UI libraries and frameworks</li>
                      <li><strong>Backend Systems</strong> - Scalable application architecture</li>
                      <li><strong>AI Integration</strong> - LLM implementation and optimization</li>
                      <li><strong>Problem Solving</strong> - Analytical approach to complex issues</li>
                    </ul>
                    <h2>Career Objective</h2>
                    <p>Seeking opportunities to leverage my technical expertise and creative problem-solving skills in challenging software development roles that allow me to contribute to innovative projects and continue expanding my knowledge in emerging technologies.</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="status-bar">
              <div className="status-item">
                {activeSection.includes('json') ? (
                  <>
                    <i className="fas fa-check-circle"></i> Valid JSON
                  </>
                ) : (
                  <>
                    <i className="fab fa-markdown"></i> Markdown
                  </>
                )}
              </div>
              <div className="status-item">
                <i className="fas fa-code-branch"></i> main
              </div>
              <div className="status-item line-info">
                <span>Ln 1, Col 1</span>
                <span className="spaces">Spaces: 2</span>
                <span className="encoding">UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
