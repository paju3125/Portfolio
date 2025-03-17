import React, { useEffect, useState } from 'react';
import "./preloader.css";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing...');
  
  // Simulate loading process
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + Math.random() * 10;
        
        // Update status text based on progress
        if (newProgress > 35) {
          setStatusText('Almost ready...');
        } else if (newProgress > 20) {
          setStatusText('Loading components...');
        }
        
        if (newProgress >= 50) {
          clearInterval(loadingInterval);
          return 50;
        }
        
        return newProgress;
      });
    }, 300);
    
    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className="minimal-preloader">
      <div className="loader-content">
        <div className="loader-icon">
          <span className="bracket-left">{'{'}</span>
          <span className="bracket-pulse">•</span>
          <span className="bracket-right">{'}'}</span>
        </div>
        
        <div className="loader-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="loader-text">{statusText}</div>
      </div>
    </div>
  );
}
