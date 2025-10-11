import TiltedCard from "../reactBitsComponents/TiltedCard";

export default function Services() {
  return (
    <div className="services w-screen min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* العنوان */}
      <h2 className="text-black text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Services
      </h2>

      {/* الجريد */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto">
        {/* الكروت */}
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <TiltedCard
            key={num}
            className="flex text-center items-center justify-center bg-center rounded-2xl overflow-hidden shadow-lg"
            imageSrc="src/assets/black-texture-projects.webp"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="auto"
            containerWidth="100%"
            imageHeight="auto"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 z-10 bg-transparent p-4">
                <img
                  src="src/assets/branding.webp"
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-[15px]"
                  alt="branding"
                />
                <h3 className="font-bold text-[22px] sm:text-[28px] lg:text-[30px] text-white text-center">
                  Brand Identity
                </h3>
                <p className="text-white text-center text-[14px] sm:text-[16px] leading-relaxed max-w-[400px]">
                  Brands nowadays are like people, there's just too many of
                  them, each wants to look different and unique and to have its
                  own looks and personality. We get to know your brand, inside
                  and out.. tailor it to suit its character, to reach desired
                  target segments with the right look. whether the business is
                  offering a product or a servicе
                </p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
