import { useState,useEffect } from "react";
export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from a local JSON file or an API
        fetch("https://winkbackend-production.up.railway.app/api/projects")
          .then((response) => response.json())
          .then((data) => setProjects(data))
          .catch((error) =>
            console.error("Error fetching project data:", error)
          );
    }, []);
    return (
        <section id="projects" className=" w-screen h-screen projects py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-700">{project.brief}</p>
                            <p className="text-gray-700">{project.brief}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}