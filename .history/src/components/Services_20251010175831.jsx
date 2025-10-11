import TiltedCard from "../reactBitsComponents/TiltedCard";
import {}
export default function Services() {
  const brandingImg = "src/assets/branding.webp";
  const bgImg = "src/assets/black-texture-projects.webp";

  const services = [
    {
      id: 1,
      title: "Brand Identity",
      desc: "Brands nowadays are like people, there's just too many of them, each wants to look different and unique and to have its own looks and personality. We get to know your brand, inside and out.. tailor it to suit its character, to reach desired target segments with the right look.",
      img: bgImg,
    },
    {
      id: 2,
      title: "Web & Apps",
      desc: "Design and build responsive web and mobile applications focused on UX, performance and conversion.",
      img: bgImg,
    },
    {
      id: 3,
      title: "Marketing",
      desc: "Strategic campaigns, social media management and content that grows audiences and drives results.",
      img: bgImg,
    },
    {
      id: 4,
      title: "Visual Design",
      desc: "High-impact visuals, art direction and creative execution for digital & print touchpoints.",
      img: bgImg,
    },
    {
      id: 5,
      title: "Product Strategy",
      desc: "Research-led product planning and roadmaps to deliver measurable outcomes and product-market fit.",
      img: bgImg,
    },
    {
      id: 6,
      title: "Consulting",
      desc: "Business & creative consulting to align brand, product and growth strategies for long-term success.",
      img: bgImg,
    },
  ];

  return (
    <div className="services w-screen min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h2 className="text-black text-center font-bold text-[36px] sm:text-[48px] mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto place-items-center">
        {services.map((s) => (
          <TiltedCard
            key={s.id}
            className="flex text-center items-center justify-center bg-center rounded-2xl overflow-hidden shadow-lg"
            imageSrc={s.img}
            altText={s.title}
            captionText={s.title}
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
                  src={brandingImg}
                  className="w-[60px] h-[60px] rounded-[15px]"
                  alt="branding"
                />
                <h3 className="font-bold text-[24px] sm:text-[30px] text-white text-center">
                  {s.title}
                </h3>
                <p className="text-white text-center text-[14px] sm:text-[16px] leading-relaxed max-w-[400px]">
                  {s.desc}
                </p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
