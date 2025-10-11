import { useState, useEffect } from "react";

/* import your local logos - update paths/names to match your files */
import logo1 from "../assets/Samir Ghoraba logo.webp";
import logo2 from "../assets/hydraa.webp";
import logo3 from "../assets/tap.webp";
import logo4 from "../assets/Profit.webp";
import logo5 from "../assets/rashat.webp";
import logo6 from "../assets/Badawi.webp";
import logo7 from "../assets/Priceless logo.webp";
import logo8 from "../assets/elfaye2.webp";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

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
        <h2 className="">Our Projects</h2>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const logo = logos[idx % logos.length];
            return (
              <div
                key={project.id ?? project._id ?? idx}
                className="relative bg-white p-6 rounded-lg shadow overflow-hidden"
                style={{ minHeight: 240 }}
              >
                {/* logo top-left, fixed 180x180 (responsive: smaller on very small screens) */}
                <div
                  className="absolute top-4 left-4"
                  style={{ width: 180, height: 180 }}
                >
                  <img
                    src={logo}
                    alt={`${project.name ?? project.title ?? "logo"}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 12,
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "/assets/black-texture-projects.webp";
                    }}
                  />
                </div>

                {/* push content below the logo so layout is column, not row */}
                <div style={{ marginTop: 200 }} className="pl-0">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.name ?? project.title ?? "Untitled"}
                  </h3>

                  <p className="text-black mb-2">
                    <strong>BRIEF:</strong>
                    <br />
                    {project.brief ?? project.description ?? "-"}
                  </p>

                  <p className="text-black mb-2">
                    <strong>SOLUTION:</strong>
                    <br />
                    {project.solution ?? project.solutions ?? "-"}
                  </p>

                  <p className="text-black">
                    <strong>RESULT:</strong>
                    <br />
                    {project.result ?? project.results ?? "-"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
