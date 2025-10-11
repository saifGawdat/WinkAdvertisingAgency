import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
  const containerRef = useRef(null);
  const [team, setTeam] = useState([]);

  // Fetch team data
  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/team-members")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray(".team-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
          },
        }
      );
    });
  }, [team]);

  const images = Array.from({ length: 39 }, (_, i) => `/cards/${i + 1}.webp`);
  const visibleTeam = team.slice(2);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-[30px] justify-center items-center bg-black overflow-y-hidden "
    >
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
              className="team-card text-center flex flex-col items-center justify-center gap-[5px] w-[45%] sm:w-auto "
            >
              <img
                src={imgSrc}
                alt={member.name || `member-${originalIdx}`}
                className="w-[350px] h-[350px] max-[700px]:h-[200px] object-fit rounded-[40px] "
              />
              <h3 className="text-[20px] font-bold leading-tight text-white max-[700px]:text-[12px] ">
                {member.name}
              </h3>
              <p className="text-gray-500 text-[15px] max-[700px]:text-[12px]">
                {member.jobTitle}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
