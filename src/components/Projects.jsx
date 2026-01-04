import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store with cart, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      tech: ["React", "API Integration", "Chart.js"],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ marginTop: "1rem" }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "#e0f2fe",
                      color: "#0369a1",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "15px",
                      fontSize: "0.9rem",
                      marginRight: "0.5rem",
                      display: "inline-block",
                      marginTop: "0.5rem",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
