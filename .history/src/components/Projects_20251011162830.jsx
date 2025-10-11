import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* import your local logos */
import logo1 from "../assets/Samir Ghoraba logo.webp";
import logo2 from "../assets/hydraa.webp";
import logo3 from "../assets/tap.webp";
import logo4 from "../assets/Profit.webp";
import logo5 from "../assets/rashat.webp";
import logo6 from "../assets/Badawi.webp";
import logo7 from "../assets/Priceless logo.webp";
import logo8 from "../assets/elfaye2.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProjects(data);
        else if (Array.isArray(data.data)) setProjects(data.data);
        else if (Array.isArray(data.projects)) setProjects(data.projects);
        else {
          const possible = Object.values(data).find((v) => Array.isArray(v));
          if (possible) setProjects(possible);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  useEffect(() => {
    if (!sectionRef.current || textRefs.current.length === 0) return;

    // Animate text when the section scrolls into view
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when top of section reaches 80% of viewport
          toggleActions: "play none none reset",
        },
      }
    );
  }, [projects]);

  if (!projects.length)
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        loading projects...
      </section>
    );

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects flex flex-col items-center justify-center min-h-screen w-screen"
    >
      <h2 className="text-white text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Projects
      </h2>

      {/* Slider wrapper */}
      <div className="relative w-[90vw] flex items-center justify-center">
        {/* Previous Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 text-black text-3xl font-bold px-4 py-2 cursor-pointer select-none "
        >
          &#10094;
        </button>

        {/* Project Slide */}
        <div className="bg-white text-black rounded-2xl shadow-lg w-full flex flex-col items-center transition-all duration-500 relative p-6">
          <img
            src={logos[index % logos.length]}
            alt={projects[index].name}
            className="w-[160px] h-[160px] object-contain mb-6 rounded-lg !m-[25px]"
          />

          {/* Text refs for ScrollTrigger */}
          <h3
            ref={(el) => (textRefs.current[0] = el)}
            className="text-2xl font-bold !m-[25px]"
          >
            {projects[index].name ?? "Untitled"}
          </h3>
          <p ref={(el) => (textRefs.current[1] = el)} className="!m-[25px]">
            <strong>BRIEF:</strong>
            <br /> {projects[index].brief ?? "-"}
          </p>
          <p ref={(el) => (textRefs.current[2] = el)} className="!m-[25px]">
            <strong>SOLUTION:</strong>
            <br /> {projects[index].solution ?? "-"}
          </p>
          <p ref={(el) => (textRefs.current[3] = el)} className="!m-[25px]">
            <strong>RESULTS:</strong>
            <br /> {projects[index].results ?? "-"}
          </p>
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 text-black text-3xl font-bold px-4 py-2 cursor-pointer select-none"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex mt-6 gap-2">
        {projects.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>

      <button className="border-white border-2 bg-black text-white !py-[12px] !px-[25px] !w-[250px] rounded-[30px] hover:bg-white hover:text-black hover:border-black hover:border-[2px] cursor-pointer transition-all duration-300 !mt-[20px]">
        <a
          href="https://drive.google.com/file/d/1XBKvNcfjyLKxPo6SN_-GB_rE40CLsZrB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More
        </a>
      </button>
      <div className="w-screen ligrReverse"></div>
    </section>
  );
}
