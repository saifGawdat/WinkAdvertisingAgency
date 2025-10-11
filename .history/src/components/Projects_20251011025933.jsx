import { useState, useEffect, useRef } from "react";
import CustomSlider from "./CustomSlider";


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
  const wrapperRef = useRef(null);
  const [frameWidth, setFrameWidth] = useState(0);
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  // fetch projects (keeps your original response handling)
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


  if (!projects.length)
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        loading projects...
      </section>
    );

  return (
    <section
      id="projects"
      className="projects flex flex-col items-center justify-center min-h-screen w-screen"
    >
      <h2 className="text-white text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Projects
      </h2>

      <CustomSlider>
        {projects.map((project, i) => (
          <div
            key={project.id || i}
            className="flex-shrink-0 w-full flex px-4"
            style={{
              minWidth: "100%", // important: each slide equals wrapper width
              boxSizing: "border-box",
              minHeight: "450px",
            }}
          >
            <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-[100%] h-[100%] relative">
              <img
                src={logos[i % logos.length]}
                alt={project.name}
                className="w-[160px] h-[160px] object-contain mb-6 rounded-lg mx-auto"
              />
              <h3 className="text-2xl font-bold mb-3 text-center">
                {project.name ?? "Untitled"}
              </h3>
              <p className="mb-3 text-center">
                <strong>BRIEF:</strong>
                <br /> {project.brief ?? "-"}
              </p>
              <p className="mb-3 text-center">
                <strong>SOLUTION:</strong>
                <br /> {project.solution ?? "-"}
              </p>
              <p className="text-center">
                <strong>RESULTS:</strong>
                <br /> {project.results ?? "-"}
              </p>
            </div>
          </div>
        ))}
      </CustomSlider>
    </section>
  );
}
