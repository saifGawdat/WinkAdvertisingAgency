import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ContactUs() {
  return (
    <section
      id="contactUs"
      className="w-screen h-screen flex flex-col items-center justify-start"
    >
      <h2 className="text-black text-center font-bold text-[32px] md:text-[48px] mt-[5px]">
        Contact Us
      </h2>
      <div className="formIframe flex flex-col md:flex-row items-center justify-start">
        <div className="mapBg relative">
          <img src="src/assets/map.webp" alt="" />
          <div>
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.286384724131!2d31.000991475421102!3d30.794602174554463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9db8cd31c99%3A0xe5e5e78fba59d364!2sWink%20Agency!5e0!3m2!1sen!2seg!4v1758808072001!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
