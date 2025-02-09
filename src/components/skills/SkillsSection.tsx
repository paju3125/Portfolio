import React from "react";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", logo: "/logos/python.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "Java", logo: "/logos/java.svg" },
      { name: "C", logo: "/logos/c.svg" },
      { name: "SQL", logo: "/logos/sql.svg" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "HTML/CSS", logo: "/logos/htmlcss.svg" },
      { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Django", logo: "/logos/django.svg" },
      { name: "Flask", logo: "/logos/flask.svg" },
      { name: "Django REST Framework", logo: "/logos/drf.svg" },
      { name: "Node.js", logo: "/logos/nodejs.svg" },
    ],
  },
  {
    category: "Database Management",
    items: [
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "SQLite", logo: "/logos/sqlite.svg" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: "/logos/aws.svg" },
      { name: "Ansible", logo: "/logos/ansible.svg" },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "LLM Integration", logo: "/logos/llm.svg" },
      { name: "OpenCV", logo: "/logos/opencv.svg" },
      { name: "Keras", logo: "/logos/keras.svg" },
      { name: "Pandas", logo: "/logos/pandas.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git/GitHub", logo: "/logos/github.svg" },
      { name: "Docker", logo: "/logos/docker.svg" },
      { name: "Slack API", logo: "/logos/slack.svg" },
      { name: "Discord API", logo: "/logos/discord.svg" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="space-y-8">
        {skills.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.items.map((skill, idx) => (
                <div key={idx} className="group flex flex-col items-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-contain transition-transform group-hover:scale-110"
                  />
                  <p className="text-sm mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

