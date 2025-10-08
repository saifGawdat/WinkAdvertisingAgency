import "../App.css";
import LiquidEther from "../reactBitsComponents/LiquidEther.jsx";
import cap from "../assets/cap.webp";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const capRef = useRef(null);

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
      className="relative w-screen h-screen bg-black shadow-2xl flex flex-row justify-start items-center overflow-visible !mt-[280px] max-[1050px]:!mt-[200px] max-[400px]:!mt-[100px]"
    >
      <LiquidEther
        colors={["#fff", "#FffC", "#ffF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        enableMouse={true}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.2}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.2}
        autoIntensity={1.2}
        takeoverDuration={0.25}
        autoResumeDelay={200}
        autoRampDuration={0.6}
      />

      {/* Cap absolutely positioned in the section */}
      <img
        ref={capRef}
        src={cap}
        alt="cap"
        className="absolute top-0 left-[5%] w-[20%] h-[80%] z-[9]"
      />

      <div className="accordionContainer relative">
        <h2>About Us</h2>
      
      </div>
    </section>
  );
}
