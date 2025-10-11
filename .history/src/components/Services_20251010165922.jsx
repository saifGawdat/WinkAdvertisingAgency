import TiltedCard from "../reactBitsComponents/TiltedCard";

export default function Services() {
  return (
    <div className="services w-screen min-h-screen py-12">
      <h2 className="text-black text-center font-bold text-[48px] mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
        <TiltedCard
          className="w-full h-[400px]"
          imageSrc="src/assets/black-texture-projects.webp"
          altText="Service 1"
          captionText="Service 1 Description"
        />
        <TiltedCard
          className="w-full h-[400px]"
          imageSrc="src/assets/black-texture-projects.webp"
          altText="Service 2"
          captionText="Service 2 Description"
        />
        <TiltedCard
          className="w-full h-[400px]"
          imageSrc="src/assets/black-texture-projects.webp"
          altText="Service 3"
          captionText="Service 3 Description"
        />
        {/* Repeat for other cards */}
      </div>
    </div>
  );
}
