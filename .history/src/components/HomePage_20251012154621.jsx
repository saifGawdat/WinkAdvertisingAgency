import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

    useEffect(() => {
      document.body.style.overflowY = "hidden";
    const tl = gsap.timeline();

    // Intro animations
    tl.fromTo(
      textRef.current,
      { x: -3, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
      .fromTo(
        buttonsRef.current,
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        imageRef.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.2"
      );

    // Floating animation (continuous)
    gsap.to(imageRef.current, {
        y: -,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2, // wait until the intro finishes
    });
  }, []);

  return (
    <div
      className="textSection flex !flex-row items-start lg:!mt-[200px] lg:!mx-[150px]
      max-[1050px]:flex-col max-[1050px]:items-center max-[1050px]:mx-[20px] !overflow-hidden"
    >
      <div className="flex flex-col items-center w-fit z-10 !overflow-hidden  max-[1024px]:!mt-[200px] max-[500px]:!mt-[100px]">
        <h1
          ref={textRef}
          className="text-[70px] leading-tight font-bold text-center 
          max-[1050px]:text-[70px]"
        >
          WE KNOW <br /> WHAT YOU WANT
        </h1>

        <div
          ref={buttonsRef}
          className="btns flex flex-row justify-center !mt-[30px] gap-[15px] w-full 
          max-[1050px]:flex-col max-[1050px]:items-center"
        >
          <button className="bg-black text-white !py-[12px] !px-[25px] !w-[250px] rounded-[30px] hover:bg-white hover:text-black hover:border-black hover:border-[2px] cursor-pointer transition-all duration-300">
            <a href="#contactUs"> Let's Begin</a>
          </button>
          <button className="bg-white text-black border-black border-[2px] !py-[12px] !px-[25px] !w-[250px] rounded-[30px] hover:bg-black hover:text-white cursor-pointer transition-all duration-300">
            <a href="#projects">See Our Work</a>
          </button>
        </div>
      </div>

      <img
        ref={imageRef}
        src="../src/assets/home.webp"
        alt="HomePage"
        className="w-[100%] h-[100vh] absolute top-[0px] right-[0px] max-[1050px]:mt-[40px] max-[1050px]:!w-[900px] !overflow-x-hidden"
      />
    </div>
  );
}
