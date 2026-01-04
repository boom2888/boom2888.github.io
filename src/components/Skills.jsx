import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "TypeScript",
    "Python",
    "Git",
    "MongoDB",
    "Express.js",
    "REST APIs",
    "Responsive Design",
    "UI/UX Design",
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
