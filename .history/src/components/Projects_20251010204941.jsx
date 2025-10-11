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
        <section id="projects" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
}