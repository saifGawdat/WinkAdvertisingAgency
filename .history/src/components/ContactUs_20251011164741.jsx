import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  return (
    <section
      id="contactUs"
      className="w-screen h-screen flex flex-col items-center justify-start relative overflow-hidden"
    >
      <h2 className="text-black text-center font-bold text-[32px] md:text-[48px] mt-[5px] z-10">
        Contact Us
      </h2>

      <div className="relative w-full h-full flex items-center justify-center mt-4">
        {/* الخلفية */}
        <img
          src="src/assets/map.webp"
          alt="map background"
          className="w-[40%] h-[50%] object-cover relative "
        />

        {/* الخريطة العايمة */}
   
      </div>
    </section>
  );
}
