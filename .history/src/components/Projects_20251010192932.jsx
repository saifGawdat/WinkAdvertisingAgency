import{useState,useEffect}from"react";
export default function Projects(){
    const[projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch("")
        .then(res=>res.json())
        .then(data=>setProjects(data));
    },[]);

}