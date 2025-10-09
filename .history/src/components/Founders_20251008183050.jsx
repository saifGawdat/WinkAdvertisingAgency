import LiquidEther from "../reactBitsComponents/LiquidEther";
export default function Founders() {
  return (
    <section className="foundersSection flex flex-row flex-wrap w-screen h-screen bg-black relative">
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
      <div className="imgs flex flex-row absolute top-[50%] -translate-y-1/2 justify-center items-center gap-[20px] ">
        <div className="overflow-hidden flex flex-col items-center justify-center text-white gap-[10px]">
          <img
            className="w-[400px] h-[400px] rounded-[10px]"
            src="src/assets/cards/1.webp"
            alt=""
          />
          <h3 className="overflow-hidden font-bold">Ebrahim Zaid</h3>
          <p className="overflow-hidden">Founder</p>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-center text-white gap-[10px]">
          <img
            className="w-[400px] h-[400px] rounded-[10px]"
            src="src/assets/cards/2.webp"
            alt=""
          />
          <h3 className="overflow-hidden font-bold">Eslam Yehia</h3>
          <p className="overflow-hidden">Founder</p>
        </div>
      </div>
      <div className="txt flex flex-col text-white">
        <h2 className="font-bold">Meet Our Founders & Team</h2>
        <p>
          We get to know your brand, rediscover it for new potentials, find more
          effective ways and creative solutions to reach your goals. We help
          making your brand grow among others, leading the market with the most
          creative ways. We integrate the best techniques and solutions along
          with the vision of our clients, redefining the whole meaning of
          marketing.
        </p>
      </div>
    </section>
  );
}
