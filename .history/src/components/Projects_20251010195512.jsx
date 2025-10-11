import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projects w-screen h-screen" id="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card text">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.brief}</p>
          </div>
        ))}
      </div>    
  );
}
