import{useState,useEffect}from"react";
import ScrollStack from "../reactBitsComponents/ScrollStack";
export default function Projects(){
    const[projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch("https://winkbackend-production.up.railway.app/api/projects")
          .then((res) => res.json())
          .then((data) => setProjects(data));
    },[]);
    return(
        <div className="projects w-screen h-screen" id="projects">
        <ScrollStack>
          {projects.map((project) => (
            <ScrollStack.Item key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </ScrollStack.Item>
          ))}
        </ScrollStack>
      </div>
    );

}