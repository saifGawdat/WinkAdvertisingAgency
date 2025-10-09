import { useEffect,useState } from "react";

export default function TeamMembers (){
    const [team,setTeam] = useState([])
    useEffect(()=>{
          fetch(
            "https://winkbackend-production.up.railway.app/api/team-members"
          ) // غيّر اللينك للـ API الحقيقي
            .then((res) => res.json())
            .then((data) => setTeam(data))
            .catch((err) => console.error(err));

    },[])


}