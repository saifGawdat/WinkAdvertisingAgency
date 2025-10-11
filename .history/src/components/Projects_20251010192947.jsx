import{useState,useEffect}from"react";
export default function Projects(){
    const[projects,setProjects]=useState([]);
    useEffect(("https://winkbackend-production.up.railway.app/api/projects")=>{
        fetch("")
        .then(res=>res.json())
        .then(data=>setProjects(data));
    },[]);

}