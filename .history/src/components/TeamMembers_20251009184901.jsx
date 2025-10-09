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
return (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
    const imgs
    {}
    {team.map((member) => (
      <div key={member.name} style={{ textAlign: "center" }}>
        <img
          src={member.imagePath}
          alt={member.name}
          style={{ width: "100px", borderRadius: "50%" }}
        />
        <h3>{member.name}</h3>
        <p>{member.jobTitle}</p>
      </div>
    ))}
  </div>
);

}