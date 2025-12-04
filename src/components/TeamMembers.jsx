import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const apiUrl = import.meta.env.VITE_API_URL;

/* import your local logos */

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
  const containerRef = useRef(null);
  const [team, setTeam] = useState([]);

  // Fetch team data
  useEffect(() => {
    fetch(`${apiUrl}/api/team-members`)
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

  // Custom job title order for sorting team members
  const jobTitleOrder = [
    "Team Leader, Quality Control",
    "HR Generalist",
    "Media Buyer",
    "Content Creator",
    "Quality Control",
    "Team Leader, Graphic Designer",
    "Graphic Designer",
    "Videographer",
    "Social Media Specialist",
    "Content Creator",
    "Video Editor",
    "Team Leader, Moderation",
    "Moderation",
    "Financial Manager",
  ];

  // Sort team members by the predefined job title order
  const sortedTeam = [...team].sort((a, b) => {
    const indexA = jobTitleOrder.indexOf(a.jobTitle);
    const indexB = jobTitleOrder.indexOf(b.jobTitle);
    // If job title not found in order array, place at the end
    const orderA = indexA === -1 ? jobTitleOrder.length : indexA;
    const orderB = indexB === -1 ? jobTitleOrder.length : indexB;
    return orderA - orderB;
  });

  const visibleTeam = sortedTeam.slice(0);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-[30px] justify-center items-center bg-black overflow-y-hidden !mb-[50px]"
    >
      {team.length === 0 ? (
        <p>Loading...</p>
      ) : visibleTeam.length === 0 ? (
        <p className="text-center text-white">No members to display.</p>
      ) : (
        visibleTeam.map((member, idx) => (
          <div
            key={`${member.name || "member"}-${idx}`}
            className="team-card text-center flex flex-col items-center justify-center gap-[5px] w-[45%] sm:w-auto "
          >
            <img
              src={member.imagePath}
              alt={member.name || `member-${idx}`}
              className="w-[350px] h-[350px] max-[700px]:h-[200px] object-fit rounded-[40px] "
            />
            <h3 className="text-[20px] font-bold leading-tight text-white max-[700px]:text-[12px] ">
              {member.name}
            </h3>
            <p className="text-gray-500 text-[15px] max-[700px]:text-[12px]">
              {member.jobTitle}
            </p>
          </div>
        ))
      )}
      <h3 className="z-1000 font-bold text-white text-xl text-center">
        {" "}
        All Rights Reserved © 2025 Wink Advertising Agency.
      </h3>
      <div className="w-screen ligr "> </div>
    </div>
  );
}
