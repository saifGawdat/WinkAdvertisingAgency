import TiltedCard from "../reactBitsComponents/TiltedCard"
export default function Services(){
    return(
        <div className="services w-screen h-screen ">
            <h2 className="text-black text-center font-bold text-[24px]">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <TiltedCard
                    imageSrc="src/assets/black-texture-projects.webp"
                    altText="Service 1"
                    captionText="Service 1 Description"
                />
                <TiltedCard
                    className=
                    imageSrc="src/assets/black-texture-projects.webp"
                    altText="Service 2"
                    captionText="Service 2 Description"
                />
                <TiltedCard
                    imageSrc="src/assets/black-texture-projects.webp"
                    altText="Service 3"
                    captionText="Service 3 Description"
                />
            </div>
        </div>
    )
}