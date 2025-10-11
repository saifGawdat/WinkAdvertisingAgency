import TiltedCard from "../reactBitsComponents/TiltedCard";
export default function Services() {
  return (
    <div className="services w-screen h-screen justify-center items-center">
      <h2 className="text-black text-center font-bold text-[48px]">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <TiltedCard
          className="flex text-center items-center justify-center bg-center rounded-[20px] shadow"
          imageSrc="src/assets/black-texture-projects.webp"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="absolute inset-0  justify-center  z-10 bg-transparent flex flex-col items-center gap-3">
              <img
                src="src/assets/branding.webp"
                className="w-[60px] h-[60px] rounded-[15px]"
                alt="branding"
              />
              <p className="text-white text-center p-4">
                Brands nowadays are like people, there's just too many of them,
                each wants to look different and unique and to have its own
                looks and personality. We get to know your brand, inside and
                out.. tailor it to suit its character, to reach desired target
                segments with the right look. whether the business is offering a
                product or a servicе
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
