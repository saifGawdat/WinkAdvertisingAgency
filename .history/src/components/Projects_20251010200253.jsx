import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div
      className="projects w-screen h-screen mx-auto my-20 flex items-center justify-center"
      id="projects"
    >
      <div className="wrapper h-[90%] w-[90%] bg-white text-black rounded-[30px] ">
        <div className="carousel h-[90%] w-[90%] bg-white text-black ">
            logo
        </div>
      </div>
    </div>
  );
}
