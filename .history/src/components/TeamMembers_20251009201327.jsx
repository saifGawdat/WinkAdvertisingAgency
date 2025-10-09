import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
  const containerRef = useRef(null);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/team-members")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray(".team-card"); // select all cards
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.05, // small stagger per line
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
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
      className="flex flex-wrap gap-[30px] justify-center items-center bg-black py-20"
    >
      {team.length === 0 ? (
        <p className="text-white text-center">Loading...</p>
      ) : visibleTeam.length === 0 ? (
        <p className="text-white text-center">No members to display.</p>
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
              className="team-card text-center flex flex-col items-center justify-center gap-[5px]"
            >
              <img
                src={imgSrc}
                alt={member.name || `member-${originalIdx}`}
                className="w-[300px] h-[300px] object-cover rounded-[40px] shadow-lg"
              />
              <h3 className="text-[20px] font-bold leading-tight text-white mt-3">
                {member.name}
              </h3>
              <p className="text-gray-400 text-[15px]">{member.jobTitle}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
