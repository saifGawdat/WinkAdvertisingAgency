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
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
    },
    {
      src: "src/assets/cards/1.webp",
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
