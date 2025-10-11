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
      <h2 className="text-black text-center font-bold text-[32px] md:text-[48px] mt-[5px] z-10 overflow-hidden">
        Contact Us
      </h2>

      <div className="relative w-full h-full flex items-center justify-center mt-4 top-0.5 right-0">
        {/* الخلفية */}
        <img
          src="src/assets/map.webp"
          alt="map background"
          className="w-[40%] h-[60%] object-cover  absolute top-0.5 left-0"
        />
        <div className="absolute top-[8%] left-[2%] shadow-2xl rounded-2xl overflow-hidden border-4 border-white z-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.2492807446222!2d31.003621890474765!3d30.794555107720722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9db8cd31c99%3A0xe5e5e78fba59d364!2sWink%20Agency!5e0!3m2!1sar!2seg!4v1760190049086!5m2!1sar!2seg"
            width="700"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
