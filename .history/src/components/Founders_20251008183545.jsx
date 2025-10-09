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
    <section className="foundersSection w-screen min-h-screen bg-black relative flex items-center justify-center px-4 py-20">
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

      <div className="relative z-10 w-full max-w-[1400px] flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-12">
        <div
          ref={cardsRef}
          className="flex flex-col md:flex-row gap-8 lg:w-[60%]"
        >
          <div className="flex flex-col items-center justify-center text-white gap-4">
            <img
              className="w-full max-w-[300px] h-auto aspect-square rounded-lg object-cover"
              src="src/assets/cards/1.webp"
              alt="Ebrahim Zaid"
            />
            <h3 className="text-xl font-bold">Ebrahim Zaid</h3>
            <p>Founder</p>
          </div>

          <div className="flex flex-col items-center justify-center text-white gap-4">
            <img
              className="w-full max-w-[300px] h-auto aspect-square rounded-lg object-cover"
              src="src/assets/cards/2.webp"
              alt="Eslam Yehia"
            />
            <h3 className="text-xl font-bold">Eslam Yehia</h3>
            <p>Founder</p>
          </div>
        </div>

        <div
          ref={textRef}
          className="txt flex flex-col text-white lg:w-[40%] gap-6"
        >
          <h2 className="text-4xl font-bold">Meet Our Founders & Team</h2>
          <p className="text-lg leading-relaxed">
            We get to know your brand, rediscover it for new potentials, find
            more effective ways and creative solutions to reach your goals. We
            help making your brand grow among others, leading the market with
            the most creative ways. We integrate the best techniques and
            solutions along with the vision of our clients, redefining the whole
            meaning of marketing.
          </p>
        </div>
      </div>
    </section>
  );
}
