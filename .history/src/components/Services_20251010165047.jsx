import TiltedCard from "../reactBitsComponents/TiltedCard"
export default function Services(){
    return(
        <div className="services w-screen h-screen ">
            <h2 className="text-black text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <TiltedCard
    
                />
                <TiltedCard
      
                />
                <TiltedCard
                />
            </div>
        </div>
    )
}