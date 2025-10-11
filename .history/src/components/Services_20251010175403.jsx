import TiltedCard from "../reactBitsComponents/TiltedCard";

export default function Services() {
  // 1️⃣ All 6 services data
  const services = [
    {
      imageSrc: "src/assets/black-texture-projects.webp",
      altText: "Branding",
      captionText: "Branding",
      overlayImage: "src/assets/branding.webp",
    },
    {
      imageSrc: "src/assets/black-texture-projects.webp",
      altText: "Web Design",
      captionText: "Web Design",
      overlayImage: "src/assets/web.webp",
    },
    {
      imageSrc: "src/assets/black-texture-projects.webp",
      altText: "Photography",
      captionText: "Photography",
      overlayImage: "src/assets/photo.webp",
    },
    {
      imageSrc: "src/assets/black-texture-projects.webp",
      altText: "Videography",
      captionText: "Videography",
      overlayImage: "src/assets/video.webp",
    },
    {
      imageSrc: "src/assets/black-texture-projects.webp",
      altText: "Social Media",
      captionText: "Social Media",
      overlayImage: "src/assets/social.webp",
    },
    {
      imageSrc: "src/assets/black-texture-projects.webp",
      altText: "Marketing",
      captionText: "Marketing",
      overlayImage: "src/assets/marketing.webp",
    },
  ];

  return (
    <div className="services w-screen min-h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-black text-center font-bold text-[48px] mb-10">
        Our Services
      </h2>

      {/* 2️⃣ Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-4 max-w-6xl">
        {services.map((service, index) => (
          <TiltedCard
            key={index}
            className="flex text-center items-center justify-center bg-center rounded-2xl overflow-hidden"
            imageSrc={service.imageSrc}
            altText={service.altText}
            captionText={service.captionText}
            containerHeight="400px"
            containerWidth="400px"
            imageHeight="350px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={service.overlayImage}
                  alt={service.captionText}
                  className="w-[120px] h-[200px] rounded-xl object-cover"
                />
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
