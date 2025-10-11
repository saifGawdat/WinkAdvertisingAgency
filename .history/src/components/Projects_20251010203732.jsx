import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div
      id="projects"
      className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory bg-black"
    >
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <section
            key={index}
            className="snap-start flex flex-col items-center justify-center h-screen bg-gray-900 text-white rounded-3xl shadow-2xl m-6 p-8 md:p-10 transition-transform duration-500 hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-2xl mb-6"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
              {project.title}
            </h2>
            <p className="text-gray-300 text-center max-w-md text-sm sm:text-base md:text-lg">
              {project.description}
            </p>
          </section>
        ))
      ) : (
        <>
          <section className="snap-start flex flex-col items-center justify-center h-screen bg-gray-800 text-white rounded-3xl shadow-2xl m-6 p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Card 1
            </h2>
            <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg">
              This is the first card in the stack
            </p>
          </section>

          <section className="snap-start flex flex-col items-center justify-center h-screen bg-gray-800 text-white rounded-3xl shadow-2xl m-6 p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Card 2
            </h2>
            <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg">
              This is the second card in the stack
            </p>
          </section>

          <section className="snap-start flex flex-col items-center justify-center h-screen bg-gray-800 text-white rounded-3xl shadow-2xl m-6 p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Card 3
            </h2>
            <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg">
              This is the third card in the stack
            </p>
          </section>
        </>
      )}
    </div>
  );
}
