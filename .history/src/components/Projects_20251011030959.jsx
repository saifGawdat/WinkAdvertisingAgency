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
      className="projects flex flex-col items-center justify-center   min-h-screen w-screen"
    >
      <h2 className="text-white text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Projects
      </h2>

        {projects.map((project, i) => (
            <div className="bg-white text-black rounded-2xl shadow-lg w-[90vw]   ">
              d
              <img
                src={logos[i % logos.length]}
                alt={project.name}
                className="w-[160px] h-[160px] object-contain mb-6 rounded-lg "
              />
              <h3 className="text-2xl font-bold ">
                {project.name ?? "Untitled"}
              </h3>
              <p>
                <strong>BRIEF:</strong>
                <br /> {project.brief ?? "-"}
              </p>
              <p>
                <strong>SOLUTION:</strong>
                <br /> {project.solution ?? "-"}
              </p>
              <p>
                <strong>RESULTS:</strong>
                <br /> {project.results ?? "-"}
              </p>
            </div>
        ))}
    </section>
  );
}
