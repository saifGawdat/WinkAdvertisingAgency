import TiltedCard from "../reactBitsComponents/TiltedCard";
import { useState, useEffect } from "react";
// Import all branding images
import branding1 from "../assets/branding.webp";
import branding2 from "../assets/coding.webp";
import branding3 from "../assets/motion-graphics.webp";
import branding4 from "../assets/video-camera.webp";
import branding5 from "../assets/ads.webp";
import branding6 from "../assets/printer.webp";

export default function Services() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/services")
      .then((res) => res.json())
      .then((data) => {
        // Map branding images to services
        const brandingImages = [
          branding1,
          branding2,
          branding3,
          branding4,
          branding5,
          branding6,
        ];
        const servicesWithBranding = data.map((service, index) => ({
          ...service,
          brandingImage: brandingImages[index % brandingImages.length],
        }));
        setServiceData(servicesWithBranding);
      })
      .catch((error) => console.log("error fetching data:", error));
  }, []);

  return (
    <div id="services" className="services w-screen min-h-screen flex flex-col items-center justify-center bg-white px-4">
     <div className="w-screen li"></div>
      <h2 className="text-black text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto place-items-center">
        {serviceData.map((s) => (
          <TiltedCard
            key={s.id}
            className="flex text-center items-center justify-center bg-center rounded-2xl overflow-hidden shadow-lg"
            captionText={s.title}
            imageSrc="src/assets/black-texture-projects.webp"
            containerHeight="550px"
            containerWidth="100%"
            imageHeight="450px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute inset-0 justify-center z-10 bg-transparent flex flex-col items-center gap-3 p-4">
                <img
                  src={s.brandingImage}
                  className="w-[60px] h-[60px] rounded-[15px]"
                  alt={`${s.name} branding`}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <h3 className="font-bold text-[24px] sm:text-[30px] text-white text-center">
                  {s.name}
                </h3>
                <p className="text-white text-center text-[14px] sm:text-[16px] leading-relaxed max-w-[400px]">
                  {s.description}
                </p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
