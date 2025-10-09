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
    <section className="foundersSection w-screen min-h-screen bg-black relative">
      <LiquidEther
        className="absolute inset-0"
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

      <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-[1400px] flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            <div
              ref={cardsRef}
              className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full"
            >
              <div className="flex flex-col items-center text-white gap-6 w-full">
                <img
                  className="w-full max-w-[450px] aspect-square rounded-lg object-cover shadow-2xl"
                  src="src/assets/cards/1.webp"
                  alt="Ebrahim Zaid"
                />
                <h3 className="text-2xl lg:text-3xl font-bold">Ebrahim Zaid</h3>
                <p className="text-xl lg:text-2xl">Founder</p>
              </div>

              <div className="flex flex-col items-center text-white gap-6 w-full">
                <img
                  className="w-full max-w-[450px] aspect-square rounded-lg object-cover shadow-2xl"
                  src="src/assets/cards/2.webp"
                  alt="Eslam Yehia"
                />
                <h3 className="text-2xl lg:text-3xl font-bold">Eslam Yehia</h3>
                <p className="text-xl lg:text-2xl">Founder</p>
              </div>
            </div>

            <div
              ref={textRef}
              className="flex flex-col text-white w-full lg:max-w-[600px] gap-8 lg:gap-10 px-4 lg:px-0"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
                Meet Our Founders & Team
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center lg:text-left">
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
      </div>
    </section>
  );
}
