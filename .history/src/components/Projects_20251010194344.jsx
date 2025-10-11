import { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "../reactBitsComponents/ScrollStack";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="projects w-screen h-screen" id="projects">
      import ScrollStack, {ScrollStackItem} from './ScrollStack'
    </div>
  );
}
