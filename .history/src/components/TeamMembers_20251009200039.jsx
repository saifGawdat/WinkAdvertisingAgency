import { useEffect, useState , useRef} from "react";

export default function TeamMembers() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/team-members")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, []);

  const images = Array.from({ length: 39 }, (_, i) => `/cards/${i + 1}.webp`);

  const visibleTeam = team.slice(2);

  return (
    <div className="flex flex-wrap gap-[30px] justify-center items-center bg-black">
      {team.length === 0 ? (
        <p>Loading...</p>
      ) : visibleTeam.length === 0 ? (
        <p className="text-center text-white">No members to display.</p>
      ) : (
        visibleTeam.map((member, idx) => {
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
              className="text-center flex flex-col items-center justify-center gap-[5px]"
            >
              <img
                src={imgSrc}
                alt={member.name || `member-${originalIdx}`}
                className="w-[350px] h-[350px] object-fit rounded-[40px] "
              />
              <h3 className="text-[20px] font-bold leading-tight text-white">
                {member.name}
              </h3>
              <p className="text-gray-500 text-[15px]">{member.jobTitle}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
