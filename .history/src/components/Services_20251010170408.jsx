import TiltedCard from "../reactBitsComponents/TiltedCard"
export default function Services(){
    return (
      <div className="services w-screen h-screen justify-center items-center">
        <h2 className="text-black text-center font-bold text-[48px]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          <TiltedCard
            imageSrc="src/assets/black-texture-projects.webp"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
            }
          />
        </div>
      </div>
    );
}