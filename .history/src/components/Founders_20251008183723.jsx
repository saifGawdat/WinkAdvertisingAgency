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
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: cards,
          start: "top center",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      text,
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <section className="foundersSection w-screen min-h-screen bg-black relative flex items-center justify-center">
      <LiquidEther
        className="absolute inset-0 w-full h-full"
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

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-8 py-20 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16">
          <div
            ref={cardsRef}
            className="flex flex-col md:flex-row gap-12 lg:w-1/2"
          >
            <div className="flex flex-col items-center justify-center text-white gap-6">
              <img
                className="w-[400px] h-[400px] rounded-lg object-cover shadow-xl"
                src="src/assets/cards/1.webp"
                alt="Ebrahim Zaid"
              />
              <h3 className="text-2xl font-bold">Ebrahim Zaid</h3>
              <p className="text-xl">Founder</p>
            </div>

            <div className="flex flex-col items-center justify-center text-white gap-6">
              <img
                className="w-[400px] h-[400px] rounded-lg object-cover shadow-xl"
                src="src/assets/cards/2.webp"
                alt="Eslam Yehia"
              />
              <h3 className="text-2xl font-bold">Eslam Yehia</h3>
              <p className="text-xl">Founder</p>
            </div>
          </div>

          <div
            ref={textRef}
            className="flex flex-col text-white lg:w-1/2 gap-8"
          >
            <h2 className="text-5xl font-bold">Meet Our Founders & Team</h2>
            <p className="text-xl leading-relaxed">
              We get to know your brand, rediscover it for new potentials, find
              more effective ways and creative solutions to reach your goals. We
              help making your brand grow among others, leading the market with
              the most creative ways. We integrate the best techniques and
              solutions along with the vision of our clients, redefining the whole
              meaning of marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
