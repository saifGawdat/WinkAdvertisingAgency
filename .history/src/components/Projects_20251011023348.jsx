import { useState, useEffect } from "react";

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
  const [index, setIndex] = useState(0);
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProjects(data);
        else if (Array.isArray(data.data)) setProjects(data.data);
        else if (Array.isArray(data.projects)) setProjects(data.projects);
        else {
          const possible = Object.values(data).find((v) => Array.isArray(v));
          if (possible) setProjects(possible);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  if (!projects.length)
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        loading projects...
      </section>
    );

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen w-screen"
    >
      <h2 className="text-white text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Projects
      </h2>

      <div className="relative w-full max-w-[900px] mx-auto overflow-hidden flex items-center justify-center">
        {/* arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-white text-3xl bg-black/40 hover:bg-black/60 rounded-full px-3 py-1 z-10"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 text-white text-3xl bg-black/40 hover:bg-black/60 rounded-full px-3 py-1 z-10"
        >
          ❯
        </button>

        {/* slider track */}
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id || i}
              className="flex-shrink-0 w-full flex items-center justify-center px-4"
              style={{ minHeight: "450px" }}
            >
              <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-[80%] max-w-[700px] text-center">
                <img
                  src={logos[i % logos.length]}
                  alt={project.name}
                  className="w-[160px] h-[160px] object-contain mb-6 rounded-lg mx-auto"
                />
                <h3 className="text-2xl font-bold mb-3">
                  {project.name ?? "Untitled"}
                </h3>
                <p className="mb-3">
                  <strong>BRIEF:</strong> {project.brief ?? "-"}
                </p>
                <p className="mb-3">
                  <strong>SOLUTION:</strong> {project.solution ?? "-"}
                </p>
                <p>
                  <strong>RESULTS:</strong> {project.results ?? "-"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="flex gap-3 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
