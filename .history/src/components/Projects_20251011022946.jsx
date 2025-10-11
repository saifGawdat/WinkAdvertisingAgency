import { useState, useEffect } from "react";

/* import your local logos */
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
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="projects flex flex-col items-center justify-center min-h-screen w-screen"
    >
      <h2 className="text-white text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Projects
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-[900px] mx-auto overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 text-white text-3xl sm:text-4xl z-10 bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
        >
          ❮
        </button>

        {/* Slider container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${projects.length * 100}%`,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id || i}
              className="w-full flex-shrink-0 flex items-center justify-center px-4"
              style={{ minHeight: "450px" }}
            >
              <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-[80%] max-w-[700px]">
                <img
                  src={logos[i % logos.length]}
                  alt={project.name}
                  className="w-[160px] h-[160px] object-contain mb-6 rounded-lg mx-auto"
                />
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {project.name ?? "Untitled"}
                </h3>
                <p className="mb-3 text-center">
                  <strong>BRIEF:</strong> {project.brief ?? "-"}
                </p>
                <p className="mb-3 text-center">
                  <strong>SOLUTION:</strong> {project.solution ?? "-"}
                </p>
                <p className="text-center">
                  <strong>RESULTS:</strong> {project.results ?? "-"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 text-white text-3xl sm:text-4xl z-10 bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
        >
          ❯
        </button>
      </div>

      {/* Navigation dots */}
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
