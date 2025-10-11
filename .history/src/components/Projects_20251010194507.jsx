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
      <ScrollStack>
        <ScrollStackItem>
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
