import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(0);
  const navigate = useNavigate();

  // Navigation options with icons and routes
  const navOptions = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Projects", path: "/projects", icon: "🚀" },
    { name: "Experience", path: "/experience", icon: "💼" },
    { name: "Certifications", path: "/certifications", icon: "🏆" },
    { name: "Resume", path: "/Prajval_Gandhi_Resume.pdf", icon: "📄", external: true },
  ];

  // Filter options based on search query
  const filteredOptions = navOptions.filter(option => 
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleNav = () => setIsOpen(!isOpen);
  
  const handleOptionClick = (option) => {
    if (option.external) {
      window.open(option.path, "_blank");
    } else {
      navigate(option.path);
    }
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption((prev) => 
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption((prev) => 
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredOptions[selectedOption]) {
          handleOptionClick(filteredOptions[selectedOption]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Handle keyboard shortcut to open command palette (Ctrl+K or Command+K)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Focus the input when command palette opens
  useEffect(() => {
    if (isOpen) {
      document.getElementById('command-input')?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <div className="floating-nav-button">
        <button 
          className="command-trigger" 
          onClick={toggleNav}
          aria-label="Open command palette"
        >
          <div className="trigger-icon">⌘</div>
          <span>P</span>
          <span>R</span>
          <span>E</span>
          <span>S</span>
          <span>S</span>
          <div className="key-badge">⌘K</div>
        </button>
      </div>

      {isOpen && (
        <>
          <div className="command-palette-backdrop" onClick={() => setIsOpen(false)}></div>
          <div className="command-palette" onKeyDown={handleKeyDown}>
            <div className="command-header">
              <div className="command-icon">⌘</div>
              <input
                id="command-input"
                type="text"
                placeholder="Type a command or search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedOption(0);
                }}
                autoFocus
              />
              <button className="close-button" onClick={() => setIsOpen(false)}>
                esc
              </button>
            </div>

            <div className="command-results">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={option.name}
                    className={`command-option ${selectedOption === index ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(option)}
                    onMouseEnter={() => setSelectedOption(index)}
                  >
                    <span className="option-icon">{option.icon}</span>
                    <span className="option-name">{option.name}</span>
                    {selectedOption === index && (
                      <span className="option-hint">Enter</span>
                    )}
                  </div>
                ))
              ) : (
                <div className="no-results">No matching commands found</div>
              )}
              
              <div className="command-footer">
                <div className="shortcut-hint">
                  <span>↑↓</span> to navigate
                </div>
                <div className="shortcut-hint">
                  <span>enter</span> to select
                </div>
                <div className="shortcut-hint">
                  <span>esc</span> to dismiss
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
