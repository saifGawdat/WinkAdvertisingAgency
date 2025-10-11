import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  // debug render without ScrollStack to confirm data + visibility
  return (
    <div
      className="projects w-screen min-h-screen bg-black text-white p-8"
      id="projects"
    >
      <h2 className="text-2xl mb-6">Debug: Projects</h2>

      {projects.length === 0 ? (
        <p>Loading or no projects returned</p>
      ) : (
        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={p.id || i} className="p-6 bg-gray-800 rounded">
              <h3 className="text-xl">
                {p.title || p.name || `Project ${i + 1}`}
              </h3>
              <p className="text-sm text-gray-300">
                {p.description || "no desc"}
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-8 text-sm text-gray-400">
        If you see these items, ScrollStack is the issue.
      </p>
    </div>
  );
}
