import { useState, useEffect } from "react";
import Carousel from "../reactBitsComponents"

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
      <div style={{ height: "600px", position: "relative" }}>
        <Carousel
          baseWidth={300}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>

      {projects.map((project, i) => (
        <div className="bg-white text-black rounded-2xl shadow-lg w-[90vw] !m-[5px] ">
          <img
            src={logos[i % logos.length]}
            alt={project.name}
            className="w-[160px] h-[160px] object-contain mb-6 rounded-lg !m-[15px]   "
          />
          <h3 className="text-2xl font-bold !m-[15px]  ">
            {project.name ?? "Untitled"}
          </h3>
          <p className="!m-[15px]">
            <strong>BRIEF:</strong>
            <br /> {project.brief ?? "-"}
          </p>
          <p className="!m-[15px]">
            <strong>SOLUTION:</strong>
            <br /> {project.solution ?? "-"}
          </p>
          <p className="!m-[15px]">
            <strong>RESULTS:</strong>
            <br /> {project.results ?? "-"}
          </p>
        </div>
      ))}
      <button className="border-white border-2 bg-black text-white !py-[12px] !px-[25px] !w-[250px] rounded-[30px] hover:bg-white hover:text-black hover:border-black hover:border-[2px] cursor-pointer transition-all duration-300">
        See More
      </button>
    </section>
  );
}
