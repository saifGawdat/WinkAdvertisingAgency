import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://winkbackend-production.up.railway.app/api/projects"
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        console.log("projects API response:", data);

        // handle common response shapes
        let items = [];
        if (Array.isArray(data)) items = data;
        else if (Array.isArray(data.data)) items = data.data;
        else if (Array.isArray(data.projects)) items = data.projects;
        else {
          // if object, try to guess array-like properties
          const possible = Object.values(data).find((v) => Array.isArray(v));
          if (possible) items = possible;
        }

        if (mounted) {
          setProjects(items);
        }
      } catch (err) {
        console.error("Error fetching project data:", err);
        if (mounted) setError(err.message || "Fetch error");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <section
        id="projects"
        className="w-screen min-h-screen projects py-12 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <p className="text-center">
            Loading projects… (watch console/network for details)
          </p>
        </div>
      </section>
    );

  if (error)
    return (
      <section
        id="projects"
        className="w-screen min-h-screen projects py-12 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-red-600">
            Error loading projects: {error}
          </p>
        </div>
      </section>
    );

  if (!projects.length)
    return (
      <section
        id="projects"
        className="w-screen min-h-screen projects py-12 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <p>
            No projects returned from API. Check console/network for response
            shape.
          </p>
        </div>
      </section>
    );

  return (
    <section
      id="projects"
      className="w-screen min-h-screen projects py-12 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id ?? project._id ?? idx}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.name ?? project.title ?? "Untitled"}
              </h3>
              <p className="text-black mb-1">
                Brief
                {project.brief ?? project.description ?? "-"}
              </p>
              <p className="text-black mb-1">
                {project.solution ?? project.solutions ?? "-"}
              </p>
              <p className="text-black">
                {project.result ?? project.results ?? "-"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
