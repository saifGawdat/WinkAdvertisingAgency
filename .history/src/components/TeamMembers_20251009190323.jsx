import { useEffect, useState } from "react";

export default function TeamMembers() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/team-members")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, []);
  const images = [
    {
      src: "src//cards/1.webp",
    },
    {
      src: "..//cards/2.webp",
    },
    {
      src: "..//cards/3.webp",
    },
    {
      src: "..//cards/4.webp",
    },
    {
      src: "..//cards/5.webp",
    },
    {
      src: "..//cards/6.webp",
    },
    {
      src: "..//cards/7.webp",
    },
    {
      src: "..//cards/8.webp",
    },
    {
      src: "..//cards/9.webp",
    },
    {
      src: "..//cards/10.webp",
    },
    {
      src: "..//cards/11.webp",
    },
    {
      src: "..//cards/12.webp",
    },
    {
      src: "..//cards/13.webp",
    },
    {
      src: "..//cards/14.webp",
    },
    {
      src: "..//cards/15.webp",
    },
    {
      src: "..//cards/16.webp",
    },
    {
      src: "..//cards/17.webp",
    },
    {
      src: "..//cards/18.webp",
    },
    {
      src: "..//cards/19.webp",
    },
    {
      src: "..//cards/20.webp",
    },
    {
      src: "..//cards/21.webp",
    },
    {
      src: "..//cards/22.webp",
    },
    {
      src: "..//cards/23.webp",
    },
    {
      src: "..//cards/24.webp",
    },
    {
      src: "..//cards/25.webp",
    },
    {
      src: "..//cards/26.webp",
    },
    {
      src: "..//cards/27.webp",
    },
    {
      src: "..//cards/28.webp",
    },
    {
      src: "..//cards/29.webp",
    },
    {
      src: "..//cards/30.webp",
    },
    {
      src: "..//cards/31.webp",
    },
    {
      src: "..//cards/32.webp",
    },
    {
      src: "..//cards/33.webp",
    },
    {
      src: "..//cards/34.webp",
    },
    {
      src: "..//cards/35.webp",
    },
    {
      src: "..//cards/36.webp",
    },
    {
      src: "..//cards/37.webp",
    },
    {
      src: "..//cards/38.webp",
    },
    {
      src: "..//cards/39.webp",
    },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      
      {team.map((member) => (
        <div key={member.name} style={{ textAlign: "center" }}>
          <img
            src={images.map((i)=>{
                return i.src
            })}
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
