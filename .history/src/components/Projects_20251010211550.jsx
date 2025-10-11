import { useState, useEffect, useRef } from "react";

/* import your local logos - update paths to match your assets */
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

  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const deltaRef = useRef(0);
  const [delta, setDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "https://winkbackend-production.up.railway.app/api/projects"
        );
        const data = await res.json();
        let items = [];
        if (Array.isArray(data)) items = data;
        else if (Array.isArray(data.data)) items = data.data;
        else if (Array.isArray(data.projects)) items = data.projects;
        else {
          const possible = Object.values(data).find((v) => Array.isArray(v));
          if (possible) items = possible;
        }
        setProjects(items.slice(0, 8));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDragStart = (e) => {
    draggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX || e.touches?.[0]?.clientX;
  };

  const handleDragMove = (e) => {
    if (!draggingRef.current) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const diff = clientX - startXRef.current;
    deltaRef.current = diff;
    setDelta(diff);
  };

  const handleDragEnd = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    if (deltaRef.current > 100) setIndex((i) => Math.max(0, i - 1));
    else if (deltaRef.current < -100)
      setIndex((i) => Math.min(projects.length - 1, i + 1));
    deltaRef.current = 0;
    setDelta(0);
  };

  if (loading)
    return (
      <section
        id="projects"
        className="w-full py-20 flex items-center justify-center"
      >
        <p className="text-white">Loading projects...</p>
      </section>
    );

  if (error)
    return (
      <section
        id="projects"
        className="w-full py-20 flex items-center justify-center"
      >
        <p className="text-red-500">Error: {error}</p>
      </section>
    );

  if (!projects.length)
    return (
      <section
        id="projects"
        className="w-full py-20 flex items-center justify-center"
      >
        <p className="text-white">No projects found.</p>
      </section>
    );

  return (
    <section
      id="projects"
      className="w-full py-24 flex flex-col items-center justify-center relative"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        Our Projects
      </h2>

      {/* Slider Container */}
      <div
        ref={wrapperRef}
        className="relative w-full max-w-5xl overflow-hidden px-4"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(${-index * 100}% + ${delta}px))`,
          }}
        >
          {projects.map((project, idx) => {
            const logo = logos[idx % logos.length];
            return (
              <div
                key={idx}
                className="w-full flex-shrink-0 flex justify-center px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-[600px]">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={logo}
                      alt={project.name ?? "project logo"}
                      className="w-32 h-32 object-contain mb-6 rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/assets/black-texture-projects.webp";
                      }}
                    />
                    <h3 className="text-2xl font-bold mb-3 text-black">
                      {project.name ?? project.title ?? "Untitled"}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      <strong>BRIEF:</strong>{" "}
                      {project.brief ?? project.description ?? "-"}
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Solutions:</strong>{" "}
                      {project.solution ?? project.solutions ?? "-"}
                    </p>
                    <p className="text-gray-700">
                      <strong>Results:</strong>{" "}
                      {project.result ?? project.results ?? "-"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
