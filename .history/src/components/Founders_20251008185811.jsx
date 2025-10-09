import LiquidEther from "../reactBitsComponents/LiquidEther";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Founders() {
  const cardsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const text = textRef.current;

    gsap.fromTo(
      cards,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: cards, start: "top center", end: "bottom center" },
      }
    );

    gsap.fromTo(
      text,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: text, start: "top center", end: "bottom center" },
      }
    );
  }, []);

  return (
    <section className="foundersSection w-screen min-h-screen bg-black relative overflow-hidden">
      <LiquidEther
        colors={["#6c757d", "#6c757d", "#6c757d"]}
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

      <div className="absolute inset-0 flex items-center justify-center px-4 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* founders cards */}
          <div
            ref={cardsRef}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 sm:gap-16"
          >
            {/* card 1 */}
            <div className="flex flex-col items-center text-white gap-4 sm:gap-6">
              <img
                className="w-60 h-60 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-lg object-cover shadow-2xl"
                src="src/assets/cards/1.webp"
                alt="Ebrahim Zaid"
              />
              <h3 className="text-2xl sm:text-3xl font-bold">Ebrahim Zaid</h3>
              <p className="text-lg sm:text-2xl">Founder</p>
            </div>

            {/* card 2 */}
            <div className="flex flex-col items-center text-white gap-4 sm:gap-6">
              <img
                className="w-60 h-60 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-lg object-cover shadow-2xl"
                src="src/assets/cards/2.webp"
                alt="Eslam Yehia"
              />
              <h3 className="text-2xl sm:text-3xl font-bold">Eslam Yehia</h3>
              <p className="text-lg sm:text-2xl">Founder</p>
            </div>
          </div>

          {/* text section */}
          <div
            ref={textRef}
            className="flex flex-col text-white max-w-full sm:max-w-[600px] text-center lg:text-left mt-10 lg:mt-0 gap-6 sm:gap-10"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Meet Our Founders & Team
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed text-gray-300">
              We get to know your brand, rediscover it for new potentials,
              find more effective ways and creative solutions to reach your
              goals. We help making your brand grow among others, leading the
              market with the most creative ways. We integrate the best
              techniques and solutions along with the vision of our clients,
              redefining the whole meaning of marketing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
