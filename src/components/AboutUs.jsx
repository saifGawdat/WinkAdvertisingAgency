import "../App.css";
import LiquidEther from "../reactBitsComponents/LiquidEther.jsx";
import cap from "/assets/cap.webp";
import { useEffect, useRef, useState } from "react"; // Add useState
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const apiUrl = import.meta.env.VITE_API_URL;

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const capRef = useRef(null);
  const [aboutData,setAboutData] = useState([])
  useEffect(()=>{
    fetch(`${apiUrl}/api/about`)
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.log("error fetching data:", error));
    
  } ,[])

  useEffect(() => {
    const el = capRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutUs",
        start: "top center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    tl.fromTo(
      el,
      { y: "-150%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "bounce.out" }
    );

    tl.to(el, {
      rotation: 5,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      transformOrigin: "top center",
    });
  }, []);

  return (
    <section
      id="aboutUs"
      className="relative w-screen h-screen bg-black shadow-2xl flex items-center justify-center overflow-visible"
    >

      <img
        ref={capRef}
        src={cap}
        alt="cap"
        className="absolute top-0 left-[5%] w-[20%] h-[60%] z-[9]"
      />

      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h2 className="text-white font-bold text-5xl !mb-[50px] text-center !overflow-hidden absolute top-[20px] z-10 ">
          About Us
        </h2>
        <div className="relative z-[100] w-[90%] max-w-[800px] mx-auto">
          {aboutData.length > 0 && (
            <div className="flex flex-col gap-[100px] ">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none text-white p-8 bg-transparent border-b-2 border-white/20 animate-borderGlow text-2xl !overflow-hidden">
                  <span className="font-semibold">{aboutData[0].title}</span>
                  <span className="transform group-open:rotate-180 transition-transform duration-300">
                    ↓
                  </span>
                </summary>
                <div className="text-white/80 p-8 bg-transparent animate-slideDown text-xl !mt-4">
                  {aboutData[0].content}
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none text-white p-8 bg-transparent border-b-2 border-white/20 animate-borderGlow text-2xl !overflow-hidden">
                  <span className="font-semibold">{aboutData[1].title}</span>
                  <span className="transform group-open:rotate-180 transition-transform duration-300">
                    ↓
                  </span>
                </summary>
                <div className="text-white/80 p-8 bg-transparent animate-slideDown text-xl !mt-4">
                  {aboutData[1].content}
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none text-white p-8 bg-transparent border-b-2 border-white/20 animate-borderGlow text-2xl !overflow-hidden">
                  <span className="font-semibold">{aboutData[2].title}</span>
                  <span className="transform group-open:rotate-180 transition-transform duration-300">
                    ↓
                  </span>
                </summary>
                <div className="text-white/80 p-8 bg-transparent animate-slideDown text-xl !mt-4">
                  {aboutData[2].content}
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none text-white p-8 bg-transparent border-b-2 border-white/20 animate-borderGlow text-2xl !overflow-hidden">
                  <span className="font-semibold">{aboutData[3].title}</span>
                  <span className="transform group-open:rotate-180 transition-transform duration-300">
                    ↓
                  </span>
                </summary>
                <div className="text-white/80 p-8 bg-transparent animate-slideDown text-xl !mt-4">
                  {aboutData[3].content}
                </div>
              </details>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
