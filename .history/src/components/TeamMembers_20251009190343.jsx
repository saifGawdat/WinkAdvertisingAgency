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
      src: "../public/cards/1.webp",
    },
    {
      src: "../public/cards/2.webp",
    },
    {
      src: "../public/cards/3.webp",
    },
    {
      src: "../public/cards/4.webp",
    },
    {
      src: "../public/cards/5.webp",
    },
    {
      src: "../public/cards/6.webp",
    },
    {
      src: "../public/cards/7.webp",
    },
    {
      src: "../public/cards/8.webp",
    },
    {
      src: "../public/cards/9.webp",
    },
    {
      src: "../public/cards/10.webp",
    },
    {
      src: "../public/cards/11.webp",
    },
    {
      src: "../public/cards/12.webp",
    },
    {
      src: "../public/cards/13.webp",
    },
    {
      src: "../public/cards/14.webp",
    },
    {
      src: "../public/cards/15.webp",
    },
    {
      src: "../public/cards/16.webp",
    },
    {
      src: "../public/cards/17.webp",
    },
    {
      src: "../public/cards/18.webp",
    },
    {
      src: "../public/cards/19.webp",
    },
    {
      src: "../public/cards/20.webp",
    },
    {
      src: "../public/cards/21.webp",
    },
    {
      src: "../public/cards/22.webp",
    },
    {
      src: "../public/cards/23.webp",
    },
    {
      src: "../public/cards/24.webp",
    },
    {
      src: "../public/cards/25.webp",
    },
    {
      src: "../public/cards/26.webp",
    },
    {
      src: "../public/cards/27.webp",
    },
    {
      src: "../public/cards/28.webp",
    },
    {
      src: "../public/cards/29.webp",
    },
    {
      src: "../public/cards/30.webp",
    },
    {
      src: "../public/cards/31.webp",
    },
    {
      src: "../public/cards/32.webp",
    },
    {
      src: "../public/cards/33.webp",
    },
    {
      src: "../public/cards/34.webp",
    },
    {
      src: "../public/cards/35.webp",
    },
    {
      src: "../public/cards/36.webp",
    },
    {
      src: "../public/cards/37.webp",
    },
    {
      src: "../public/cards/38.webp",
    },
    {
      src: "../public/cards/39.webp",
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
