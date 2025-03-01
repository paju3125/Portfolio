import React from "react";
import "./skill.css";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/next-js.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "HTML", logo: "/logos/html.svg" },
      { name: "CSS", logo: "/logos/css.svg" },
      { name: "Tailwind", logo: "/logos/tailwind.svg" },
      { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Python", logo: "/logos/python.svg" },
      { name: "Django", logo: "/logos/django.svg" },
      { name: "Flask", logo: "/logos/flask.svg" },
      { name: "Java", logo: "/logos/java.svg" },
      { name: "C++", logo: "/logos/c.svg" },
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "SQLite", logo: "/logos/sqlite.svg" },
      { name: "AWS", logo: "/logos/aws.svg" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", logo: "/logos/git.svg" },
      { name: "Ansible", logo: "/logos/ansible.svg" },
      { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
    ],
  },
];

export default function Skill() {
  return (
    <section id="skill" className="skill-section">
      <div className="container">
        <h1 className="text-light heading" data-aos="fade-up" data-aos-duration="300">
          <span>Technical Proficiency</span>
        </h1>
        <div className="skills-wrapper mt-5">
          {skills.map((category, index) => (
            <div key={index} className="category-container" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="category-header">
                <h5 className="category-title">{category.category}</h5>
                <div className="category-line"></div>
              </div>
              <div className="skills-flex">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-content">
                      <div className="skill-front">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="skill-icon"
                        />
                        <p className="skill-name">{skill.name}</p>
                      </div>
                      <div className="skill-glow"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
