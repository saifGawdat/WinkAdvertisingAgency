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

  // hide first and second card by slicing off the first two entries
  const visibleTeam = team.slice(2);

  return (
    <div className="flex flex-wrap gap-[20px] justify-center items-center bg-black">
      {team.length === 0 ? (
        <p>Loading...</p>
      ) : visibleTeam.length === 0 ? (
        <p className="text-center text-white">No members to display.</p>
      ) : (
        visibleTeam.map((member, idx) => {
          // idx is index within visibleTeam; compute original index to pick a consistent image
          const originalIdx = idx + 2;
          const memberSrc =
            member.imagePath &&
            (member.imagePath.startsWith("/") ||
              member.imagePath.startsWith("http"))
              ? member.imagePath
              : null;

          const imgSrc = memberSrc || images[originalIdx % images.length];

          return (
            <div
              key={`${member.name || "member"}-${originalIdx}`}
              className="text-center flex flex-col items-center justify-center"
            >
              <img
                src={imgSrc}
                alt={member.name || `member-${originalIdx}`}
                className="w-[300px] h-[400px] object-cover rounded-[40px]"
              />
              <h3 className="text-[20px] font-bold leading-tight text-white">
                {member.name}
              </h3>
              <p className="text-white ">{member.jobTitle}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
