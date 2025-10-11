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
      <h2 className="text-black text-center font-bold text-[32px] md:text-[48px] mt-[5px] overflow-hidden">
        Contact Us
      </h2>

      <div className="flex flex-col  items-center justify-start w-full h-full relative overflow-hidden !ml-[80px]">
        {/* الخريطة في الشمال */}
        <div className="mapContainer flex items-center justify-center w-[50%] h-full relative !mt-[15%]">
          <img
            src="src/assets/map.webp"
            alt="map background"
            className="w-[70%] h-[60%] object-cover absolute top-0.5 left-0 rounded-2xl"
          />
          <div className="absolute top-[5%] left-[3%] shadow-2xl rounded-2xl overflow-hidden border-4 border-white z-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.2492807446222!2d31.003621890474765!3d30.794555107720722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9db8cd31c99%3A0xe5e5e78fba59d364!2sWink%20Agency!5e0!3m2!1sar!2seg!4v1760190049086!5m2!1sar!2seg"
              width="650px"
              height="450px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="max-[700px]:!w-[300px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* الفورم في اليمين */}
        <div className="formContainer w-[40%] h-full flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm p-6 rounded-l-2xl z-30">
          <form className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text-black text-[40px] text-center">
              Ready to take your business to the next level?
            </h2>
            <p>
              Ready to grow your business? Share your details and we’ll schedule
              a free call to learn more about your vision and how we can help
              make it happen !
            </p>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border-[3px] border-black p-2 rounded-lg text-black h-[50px] "
            />
            <input
              required
              type="email"
              placeholder=" Email"
              className="border-[3px] border-black p-2 rounded-lg text-black h-[50px]"
            />
            <input
              required
              type="number"
              placeholder=" Mobile Number"
              className="border-[3px] border-black p-2 rounded-lg text-black h-[30px]"
            />
            <textarea
              required
              placeholder="Your Message"
              className="border-[3px] border-black p-2 rounded-lg  text-black h-[250px]"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white !px-[30px] !py-[20px] w-[200px] rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
