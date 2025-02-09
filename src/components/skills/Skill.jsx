import React from "react";
import "./skill.css";

const skills = [
  {
    category: "Programming & Development",
    items: [
      { name: "Python", logo: "/logos/python.svg" },
      { name: "Java", logo: "/logos/java.svg" },
      { name: "C++", logo: "/logos/c.svg" },
      // { name: "SQL", logo: "/logos/sql.svg" },
      { name: "React.js", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/next-js.svg" },
      { name: "HTML", logo: "/logos/html.svg" },
      { name: "CSS", logo: "/logos/css.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Tailwind", logo: "/logos/tailwind.svg" },
      { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", logo: "/logos/django.svg" },
      { name: "Flask", logo: "/logos/flask.svg" },
      // { name: "Django REST Framework", logo: "/logos/drf.svg" },
      // { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "SQLite", logo: "/logos/sqlite.svg" },
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
    ],
  },
  {
    category: "Also Known",
    items: [
      { name: "Git", logo: "/logos/git.svg" },
      // {name: 'GitHub', logo: '/logos/github.svg'},
      { name: "AWS", logo: "/logos/aws.svg" },
      { name: "Ansible", logo: "/logos/ansible.svg" },
      { name: "tensorflow", logo: "/logos/tensorflow.svg" },
    ],
  },
];

export default function Skill() {
  return (
    <div className="container">
      <h1 className="text-light heading mb-4" data-aos="fade-up" data-aos-duration="300">
        <span>Skills</span>
      </h1>
      <div className="row">
        {skills.map((category, index) => (
          <div key={index} className="row">
            <h5 className="text-light fw-semibold mb-3">{category.category}</h5>
            <div className="d-flex flex-wrap justify-content-start mb-4 m-auto skill-container">
              {category.items.map((skill, idx) => (
                <div key={idx} className="text-center p-3 rounded skill-item d-flex flex-column align-items-center transition-transform hover-scale" style={{ flex: '1 1 calc(14.66% - 1rem)' }}>
                  <img src={skill.logo} alt={skill.name} className="img-fluid skill-logo mb-2" style={{ width: "60px", height: "60px" }} />
                  <p className="text-secondary opacity-15 fw-medium m-0 skill-name transition-opacity hover-opacity">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
