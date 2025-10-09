import { useEffect,useState } from "react";

export default function TeamMembers (){
    const [team,setTeam] = useState([])
    useEffect(()=>{
          fetch(
            "https://winkbackend-production.up.railway.app/api/team-members"
          ) 
            .then((res) => res.json())
            .then((data) => setTeam(data))
            .catch((err) => console.error(err));
    },[])
return(
    div
)

}