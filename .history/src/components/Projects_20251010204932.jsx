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
}