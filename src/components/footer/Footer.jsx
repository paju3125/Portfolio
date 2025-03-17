import React, { useState, useEffect } from "react";
import "./footer.css";

export default function Footer() {
  const [typedContent, setTypedContent] = useState('');
  // Typing effect for JSON content
  useEffect(() => {
    const jsonContent = 
    `
    {
      "name": "Prajval Gandhi",
      "email": "prajvalgandhi483@gmail.com",
      "phone": "+91-9665656267",
      "location": "Pune, Maharashtra",
      "available": true,
      "willing_to_relocate": true
    }
    `;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < jsonContent.length) {
        setTypedContent(prev => prev + jsonContent.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <footer id="footer" className="dev-footer">
      <div className="footer-background">
        <div className="footer-grid"></div>
        <div className="footer-glow"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="dev-terminal">
            {/* <div className="terminal-tabs">
              <div className="tab active">contact.json</div>
              <div className="tab">connect.sh</div>
              <div className="tab">README.md</div>
            </div> */}
            
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="term-btn close"></span>
                  <span className="term-btn minimize"></span>
                  <span className="term-btn maximize"></span>
                </div>
                <div className="terminal-title">
                  <span className="user">developer</span>
                  <span className="separator">@</span>
                  <span className="machine">portfolio</span>
                  <span className="path">:~/contact</span>
                </div>
              </div>
              
              <div className="terminal-body">
                <div className="terminal-split">
                  <div className="split-pane">
                    <div className="terminal-section">
                      <div className="command-line">
                        <span className="prompt">$</span>
                        <span className="command">cat contact.json</span>
                      </div>
                      <div className="json-output">
                        <pre className="output-text">
                          <span className="typed-content">{typedContent}</span>
                          {typedContent.length < 140 && <span className="cursor"></span>}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="split-pane">
                    <div className="terminal-section">
                      <div className="command-line">
                        <span className="prompt">$</span>
                        <span className="command">ls -la ./connect</span>
                      </div>
                      
                      <div className="links-container">
                        {[
                          { name: "github", icon: "github", url: "https://github.com/paju3125/" },
                          { name: "linkedin", icon: "linkedin", url: "https://www.linkedin.com/in/prajval-gandhi-648504211/" },
                          { name: "instagram", icon: "instagram", url: "https://www.instagram.com/prajval_gandhi/" },
                          { name: "email", icon: "envelope", url: "mailto:prajvalgandhi483@gmail.com" },
                          { name: "whatsapp", icon: "whatsapp", url: "https://wa.me/9665656267" }
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                          >
                            <i className={`${social.name === 'email' ? 'fas' : 'fab'} fa-${social.icon}`}></i>
                            <span className="link-name">{social.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="term-section footer-bottom">
                  <div className="command-line">
                    <span className="prompt">$</span>
                    <span className="command">echo $COPYRIGHT</span>
                  </div>
                  <div className="command-output">
                    <div className="copyright">
                      Crafted with <span className="heart">❤️</span> by Prajval Gandhi © {new Date().getFullYear()}
                    </div>
                  </div>
                </div>
                
                <div className="command-line cursor-line">
                  <span className="prompt">$</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
