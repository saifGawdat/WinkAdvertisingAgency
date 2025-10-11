import { useState, useEffect, useRef } from "react";
import CustomSlider from "./CustomSlider";


/* import your local logos */
import logo1 from "../assets/Samir Ghoraba logo.webp";
import logo2 from "../assets/hydraa.webp";
import logo3 from "../assets/tap.webp";
import logo4 from "../assets/Profit.webp";
import logo5 from "../assets/rashat.webp";
import logo6 from "../assets/Badawi.webp";
import logo7 from "../assets/Priceless logo.webp";
import logo8 from "../assets/elfaye2.webp";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const [frameWidth, setFrameWidth] = useState(0);
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  // fetch projects (keeps your original response handling)
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

  // measure wrapper width (used to translate in px)
  useEffect(() => {
    function measure() {
      const w = wrapperRef.current?.clientWidth || 0;
      setFrameWidth(w);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // clamp index when projects change
  useEffect(() => {
    if (!projects.length) {
      setIndex(0);
      return;
    }
    if (index > projects.length - 1) setIndex(0);
  }, [projects.length]);

  const prevSlide = () =>
    setIndex((prev) =>
      projects.length ? (prev === 0 ? projects.length - 1 : prev - 1) : 0
    );
  const nextSlide = () =>
    setIndex((prev) =>
      projects.length ? (prev === projects.length - 1 ? 0 : prev + 1) : 0
    );

  if (!projects.length)
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        loading projects...
      </section>
    );

  return (
    <section
      id="projects"
      className="projects flex flex-col items-center justify-center min-h-screen w-screen"
    >
      <h2 className="text-white text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Projects
      </h2>

      {/* wrapper: kept your classes, added ref and relative so arrows position correctly */}
   
       

     

    </section>
  );
}
