import { useEffect, useState } from "react";

export default function TeamMembers() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/team-members")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, []);

  // Build public paths dynamically (place images in public/cards/)
  const images = Array.from({ length: 39 }, (_, i) => `/cards/${i + 1}.webp`);

  return (
    <div
    className="flex flex-wrap gap-[20px"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {team.length === 0 ? (
        <p>Loading...</p>
      ) : (
        team.map((member, idx) => {
          const memberSrc =
            member.imagePath &&
            (member.imagePath.startsWith("/") ||
              member.imagePath.startsWith("http"))
              ? member.imagePath
              : null;

          const imgSrc = memberSrc || images[idx % images.length];

          return (
            <div
              key={`${member.name || "member"}-${idx}`}
              style={{ textAlign: "center" }}
            >
              <img
                src={imgSrc}
                alt={member.name || `member-${idx}`}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.jobTitle}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
