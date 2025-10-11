import { useState, useEffect, useRef } from "react";

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
      className="projects py-24 flex flex-col items-center justify-center relative h-screen w-screen flex-wrap ite"
    >
      {projects.map((projects, index) => (
        <div key={projects.id} className="w-[50%] bg-white text-black">
          <img src={logos[index]} alt={projects.name} className="project-logo" />
          <h3 className="project-title">{projects.name}</h3>
          <p className="project-description">{projects.description}</p>
        </div>
      ))}
    </section>
  );
}
