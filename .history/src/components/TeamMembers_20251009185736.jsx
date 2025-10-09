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
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/2.webp",
    },
    {
      src: "src/assets/cards/3.webp",
    },
    {
      src: "src/assets/cards/4.webp",
    },
    {
      src: "src/assets/cards/5.webp",
    },
    {
      src: "src/assets/cards/6.webp",
    },
    {
      src: "src/assets/cards/7.webp",
    },
    {
      src: "src/assets/cards/8.webp",
    },
    {
      src: "src/assets/cards/9.webp",
    },
    {
      src: "src/assets/cards/10.webp",
    },
    {
      src: "src/assets/cards/11.webp",
    },
    {
      src: "src/assets/cards/12.webp",
    },
    {
      src: "src/assets/cards/13.webp",
    },
    {
      src: "src/assets/cards/14.webp",
    },
    {
      src: "src/assets/cards/15.webp",
    },
    {
      src: "src/assets/cards/16.webp",
    },
    {
      src: "src/assets/cards/17.webp",
    },
    {
      src: "src/assets/cards/18.webp",
    },
    {
      src: "src/assets/cards/19.webp",
    },
    {
      src: "src/assets/cards/20.webp",
    },
    {
      src: "src/assets/cards/21.webp",
    },
    {
      src: "src/assets/cards/22.webp",
    },
    {
      src: "src/assets/cards/23.webp",
    },
    {
      src: "src/assets/cards/24.webp",
    },
    {
      src: "src/assets/cards/25.webp",
    },
    {
      src: "src/assets/cards/26.webp",
    },
    {
      src: "src/assets/cards/27.webp",
    },
    {
      src: "src/assets/cards/28.webp",
    },
    {
      src: "src/assets/cards/29.webp",
    },
    {
      src: "src/assets/cards/30.webp",
    },
    {
      src: "src/assets/cards/31.webp",
    },
    {
      src: "src/assets/cards/32.webp",
    },
    {
      src: "src/assets/cards/33.webp",
    },
    {
      src: "src/assets/cards/34.webp",
    },
    {
      src: "src/assets/cards/35.webp",
    },
    {
      src: "src/assets/cards/36.webp",
    },
    {
      src: "src/assets/cards/37.webp",
    },
    {
      src: "src/assets/cards/25.webp",
    },
    {
      src: "src/assets/cards/25.webp",
    },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
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
