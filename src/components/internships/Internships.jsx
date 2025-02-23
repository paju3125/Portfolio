import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "./internship.css"
import InternshipCard from "./InternshipCard";
import { useSwipeable } from "react-swipeable";

const internshipsData = [
  {
    logo: "/ignite_logo.png",
    companyName: "Ignite Solutions",
    title: "Software Engineer Intern",
    desc: [
      "Serving as a Backend Developer for the development of an Onboarding Automation App.",
      "Utilizing Django, Django-Rest-Framework for creating secure and efficient rest APIs."
    ],
    techs: [["Flask", "primary"], ["ReactJS", "success"], ["NLP", "warning"], 
            ["SQL", "info"], ["HTML", "danger"], ["CSS", "secondary"]],
    link: null,
    duration: "Jan 2024 - present"
  },
  {
    logo: null,
    companyName: "Result Software Development",
    title: "Lead Coordinator",
    desc: [
      'Led intern team in completing "Automation in Recruitment Process" project.',
      "Utilized Flask, ReactJS, and Machine Learning for efficient project execution."
    ],
    techs: [["Flask", "primary"], ["ReactJS", "success"], ["NLP", "warning"], 
            ["SQL", "info"], ["HTML", "danger"], ["CSS", "secondary"]],
    link: "https://github.com/answersindustries/recruitment-automation-system/tree/recruitment-automation-v1.0",
    duration: "Jun 2023 - Aug 2023"
  },
  {
    logo: "/pixelstatLogo.jpg",
    companyName: "PixelStat eSolutions Development",
    title: "Full Stack Intern",
    desc: [
      'Engineered a web app for "AKHIL BHARATIYA MARATHI CHITRAPAT MAHAMANDAL".',
      "Enhanced data management, business logic, and reporting using Flask, SQL, and JavaScript."
    ],
    techs: [["Flask", "primary"], ["MySQL", "success"], ["JavaScript", "warning"], 
            ["Bootstrap", "info"], ["HTML", "danger"], ["CSS", "secondary"]],
    link: "https://github.com/paju3125/PixelStat_ERP",
    duration: "Jul 2022 - Sept 2022"
  },
  {
    logo: "/rbtechLogo.png",
    companyName: "R B Tech Services",
    title: "Trainee PHP Developer",
    desc: [
      'Engineered a web-based "Notice Management System" using PHP language.',
      "Acquired proficiency in PHP programming through hands-on experience on a live project during the internship."
    ],
    techs: [["PHP", "primary"], ["SQL", "success"], ["JavaScript", "warning"], 
            ["Bootstrap", "info"], ["HTML", "danger"], ["CSS", "secondary"]],
    link: null,
    duration: "Jun 2020 - Aug 2020"
  }
];

const experienceData = [
  {
    logo: "/ignite_logo.png",
    companyName: "Ignite Solutions",
    title: "Software Engineer",
    desc: [
      "🤖 AI Chatbot (Customer Confidential)",
      "Designed and implemented a chatbot using React and Bootstrap",
      "Integrated external AI endpoints and internal databases",
      "Utilized Markdown for rendering user-friendly output",
      "🚀 Chaturji - AI-Based Companion",
      "Built and improved browser extension and PWA interface",
      "Implemented real-time chat and knowledge base features",
      "Optimized routing reducing load time by 55%",
      "Maintained web vital standards for responsive UX",
      "",
      "🔬 Pathology Web Platform (Customer Confidential",
      "Developed UI using Next.js and React for medical professionals",
      "Designed interface for high-resolution pathology slides",
      "Implemented SSR and optimized data fetching",
    ],
    techs: [
      ["ReactJS", "primary"], 
      ["NextJS", ""], 
      ["Javascript", "success"], 
      ["Python", "warning"],
      ["Flask", "info"],
      ["AWS", ""], 
      ["HTML", "danger"], 
      ["CSS", "secondary"]
    ],
    link: null,
    duration: "Jul 2024 - present"
  },
]

const professionalStats = [
  {
    number: "1+",
    label: "Years Professional Experience"
  },
  {
    number: "3",
    label: "Major Projects"
  },
  {
    number: "8+",
    label: "Technologies"
  },
  {
    number: "1",
    label: "Company"
  }
];

const internshipStats = [
  {
    number: "1.5+",
    label: "Years Internship"
  },
  {
    number: "4",
    label: "Internships"
  },
  {
    number: "5+",
    label: "Technologies"
  },
  {
    number: "4",
    label: "Companies"
  }
];

export default function Internships() {
  const [isFirstTab, setIsFirstTab] = useState(true);
  const markerRef = useRef(null);
  const [expIndex, setExpIndex] = useState(0);
  const [internIndex, setInternIndex] = useState(0);
  
  useEffect(() => {
    // Initialize AOS with settings that prevent reinitialization issues
    AOS.init({
      once: true, // animate only once
      mirror: false, // don't animate elements back to their initial state
      disable: 'mobile' // disable on mobile devices to prevent issues
    });
  }, []);

  const handleTabClick = (event) => {
    setIsFirstTab(!isFirstTab);
    
    // Update marker position
    if (markerRef.current && event.target) {
      markerRef.current.style.width = `${event.target.offsetWidth}px`;
      markerRef.current.style.left = `${event.target.offsetLeft}px`;
    }

    // Force AOS to refresh after tab change
    setTimeout(() => {
      AOS.refresh();
    }, 300); // Wait for tab transition to complete
  };

  useEffect(() => {
    // Set initial marker position
    const firstTab = document.querySelector('.tabs-tab');
    if (firstTab && markerRef.current) {
      markerRef.current.style.width = `${firstTab.offsetWidth}px`;
      markerRef.current.style.left = `${firstTab.offsetLeft}px`;
    }
  }, []);

  const expHandlers = useSwipeable({
    onSwipedLeft: () => setExpIndex((prev) => (prev + 1) % experienceData.length),
    onSwipedRight: () => setExpIndex((prev) => (prev - 1 + experienceData.length) % experienceData.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const internHandlers = useSwipeable({
    onSwipedLeft: () => setInternIndex((prev) => (prev + 1) % internshipsData.length),
    onSwipedRight: () => setInternIndex((prev) => (prev - 1 + internshipsData.length) % internshipsData.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="component container">
      <h2 className="text-light heading" data-aos="fade-up" data-aos-duration="500">
        <span>Experience</span>
      </h2>

      <div className="experience-stats mb-4" data-aos="fade-up" data-aos-duration="500">
        {(isFirstTab ? professionalStats : internshipStats).map((stat, index) => (
          <div 
            className="stat-item" 
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <div data-ui-tablist="navigation" className="tabs">
          <div className="tabs-marker" ref={markerRef}></div>
          <button 
            className={`tabs-tab ${isFirstTab ? 'ui-active' : ''}`}
            onClick={handleTabClick}
          >Professional Experience</button>
          <button 
            className={`tabs-tab ${!isFirstTab ? 'ui-active' : ''}`}
            onClick={handleTabClick}
          >Internship</button>
        </div>
        <div className="tabpanels">
          <div className={`tabpanel ${isFirstTab ? 'ui-enter-active' : ''}`} 
               hidden={!isFirstTab}>
            <div className="internship d-flex justify-content-center mb-5">
              <div className="carousel-container" {...expHandlers}>
              {experienceData.length > 1 &&
                <div className="swipe-hint">
                  <span>← Swipe to explore more →</span>
                </div>
              }
                <div 
                  className="main-carousel"
                  style={{ transform: `translateX(-${expIndex * 100}%)` }}
                >
                  {experienceData.map((experience, index) => (
                    <div className="carousel__item py-4" key={index}>
                      <InternshipCard {...experience} />
                    </div>
                  ))}
                </div>
                <div className="carousel-indicators">
                  {experienceData.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === expIndex ? 'active' : ''}`}
                      onClick={() => setExpIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`tabpanel ${!isFirstTab ? 'ui-enter-active' : ''}`}
               hidden={isFirstTab}>
            <div className="internship d-flex justify-content-center mb-5">
              <div className="carousel-container" {...internHandlers}>
                {internshipsData.length > 1 &&
                <div className="swipe-hint">
                  <span>← Swipe to explore more →</span>
                </div>
              }
                <div 
                  className="main-carousel"
                  style={{ transform: `translateX(-${internIndex * 100}%)` }}
                >
                  {internshipsData.map((internship, index) => (
                    <div className="carousel__item py-4" key={index}>
                      <InternshipCard {...internship} />
                    </div>
                  ))}
                </div>
                <div className="carousel-indicators">
                  {internshipsData.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === internIndex ? 'active' : ''}`}
                      onClick={() => setInternIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
