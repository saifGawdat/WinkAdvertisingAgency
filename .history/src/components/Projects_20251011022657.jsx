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
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);


  return (
    <section
      id="projects"
      className="projects flex flex-col items-center justify-center h-screen w-screen flex-wrap "
    >
      <div className="flex items-center justify-center mx-auto">
        {" "}
        <h2 className="text-white text-center font-bold text-[36px] sm:text-[48px] mb-10 mx-auto">
          Our Projects
        </h2>
      </div>

      {projects.map((projects, index) => (
        <div
          key={projects.id}
          className="w-[20%] h-[70%] bg-white text-black flex flex-col  justify-start rounded-[20px] "
        >
          <img
            src={logos[index]}
            alt={projects.name}
            className="w-[180px] h-[180px]"
          />
          <p className="text-black">
            BRIEF: <br />
            {projects.brief}
          </p>
          <p className="project-description">
            SOLUTION: <br />
            {projects.solution}
          </p>
          <p className="project-description">
            RESULTS: <br />
            {projects.results}
          </p>
        </div>
      ))}
    </section>
  );
}
