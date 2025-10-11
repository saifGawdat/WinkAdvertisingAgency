import{useState,useEffect}from"react";
export default function Projects(){
    const[projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch("https://winkbackend-production.up.railway.app/api/projects")
          .then((res) => res.json())
          .then((data) => setProjects(data));
    },[]);
    return(
        div.p
    )

}