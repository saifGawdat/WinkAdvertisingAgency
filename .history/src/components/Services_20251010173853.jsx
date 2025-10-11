import TiltedCard from "../reactBitsComponents/TiltedCard";

export default function Services() {
  return (
    <div className="services w-screen min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-black text-center font-bold text-[48px] mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-6 max-w-[1600px] mx-auto">
        {/* 1 */}
        <TiltedCard
          className="flex text-center items-center justify-center bg-center rounded-2xl overflow-hidden shadow-lg"
          imageSrc="src/assets/black-texture-projects.webp"
          altText="Brand Identity"
          containerHeight="450px"
          containerWidth="400px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <div className="absolute inset-0 justify-center z-10 bg-black/50 flex flex-col items-center gap-3 p-4 rounded-2xl">
              <img
                src="src/assets/branding.webp"
                className="w-[60px] h-[60px] rounded-[15px]"
                alt="branding"
              />
              <h3 className="font-bold text-[26px] text-white text-center">
                Brand Identity
              </h3>
              <p className="text-white text-center text-[14px] leading-relaxed">
                Brands nowadays are like people — too many of them, each wants
                to look unique and have personality. We tailor your brand to
                reach the right audience with the perfect look.
              </p>
            </div>
          }
        />

        {/* 2 */}
        <TiltedCard
          className="flex text-center items-center justify-center bg-center rounded-2xl overflow-hidden shadow-lg"
          imageSrc="src/assets/black-texture-projects.webp"
          altText="Marketing"
          containerHeight="450px"
          containerWidth="400px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <div className="absolute inset-0 justify-center z-10 bg-black/50 flex flex-col items-center gap-3 p-4 rounded-2xl">
              <img
                src="src/assets/branding.webp"
                className="w-[60px] h-[60px] rounded-[15px]"
                alt="marketing"
              />
              <h3 className="font-bold text-[26px] text-white text-center">
                Marketing Strategy
              </h3>
              <p className="text-white text-center text-[14px] leading-relaxed">
                We build marketing plans that truly connect your business with
                your target audience and maximize engagement.
              </p>
            </div>
          }
        />

        {/* 3 */}
        <TiltedCard
          className="flex text-center items-center justify-center bg-center rounded-2xl overflow-hidden shadow-lg"
          imageSrc="src/assets/black-texture-projects.webp"
          altText="Web Design"
          containerHeight="450px"
          containerWidth="400px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <div className="absolute inset-0 justify-center z-10 bg-black/50 flex flex-col items-center gap-3 p-4 rounded-2xl">
              <img
                src="src/assets/branding.webp"
                className="w-[60px] h-[60px] rounded-[15px]"
                alt="web"
              />
              <h3 className="font-bold text-[26px] text-white text-center">
                Web Design
              </h3>
              <p className="text-white text-center text-[14px] leading-relaxed">
                We craft beautiful, responsive websites that look great and
                perform perfectly on every device.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
