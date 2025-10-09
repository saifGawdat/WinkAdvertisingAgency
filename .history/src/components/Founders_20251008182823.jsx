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
      <div className="imgs flex flex-row absolute top-[50%] translate-x-1/2 -translate-y-1/2  gap-[20px] ">
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
      <div className="txt flex flex-col"></div>
    </section>
  );
}
