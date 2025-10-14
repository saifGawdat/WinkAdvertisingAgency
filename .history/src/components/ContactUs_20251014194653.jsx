import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  return (
    <section
      id="contactUs"
      className="w-screen min-h-screen md:h-screen flex flex-col items-center md:justify-center justify-start relative overflow-hidden"
    >
      <h2 className="text-black text-center font-bold text-[32px] md:text-[48px] md:mb-8 mt-[5px] !overflow-hidden">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row items-center md:justify-center justify-start w-full md:max-w-[90vw] h-full relative md:gap-8 overflow-hidden md:px-4">
        {/* الخريطة */}
        <div className="mapContainer flex items-center justify-center w-full md:w-[45vw] md:max-w-[700px] h-[400px] md:h-[500px] relative p-4 md:p-0 overflow-hidden flex-shrink-0">
          <img
            src="src/assets/map.webp"
            alt="map background"
            className="mapBg hidden md:block w-full h-full object-cover absolute rounded-2xl"
          />
          <div className="w-full md:w-[90%] md:h-[90%] shadow-2xl rounded-2xl overflow-hidden border-4 border-white z-20 md:relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.2492807446222!2d31.003621890474765!3d30.794555107720722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9db8cd31c99%3A0xe5e5e78fba59d364!2sWink%20Agency!5e0!3m2!1sar!2seg!4v1760190049086!5m2!1sar!2seg"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="md:w-full md:h-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* الفورم */}
        <div className="formContainer w-[70%] max-[768]:!h-[400px] md:w-[45vw] md:max-w-[600px] min-h-screen md:min-h-0 md:h-[500px] flex flex-col items-center justify-start bg-white/70 backdrop-blur-sm p-4 md:p-6 md:rounded-2xl z-30 overflow-y-auto overflow-x-hidden flex-shrink-0">
          <form className="flex flex-col gap-3 w-full md:max-w-[450px]">
            <h2 className="font-bold text-black text-[24px] md:text-[28px] text-center leading-tight ">
              Ready to take your business to the next level?
            </h2>
            <p className="text-sm md:text-sm">
              Ready to grow your business? Share your details and we'll schedule
              a free call to learn more about your vision and how we can help
              make it happen !
            </p>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border-[3px] border-black p-2 rounded-lg text-black h-[45px] md:h-[45px] flex-shrink-0"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="border-[3px] border-black p-2 rounded-lg text-black h-[45px] md:h-[45px] flex-shrink-0"
            />
            <input
              required
              type="tel"
              placeholder="Mobile Number"
              className="border-[3px] border-black p-2 rounded-lg text-black h-[45px] md:h-[45px] flex-shrink-0"
            />
            <textarea
              required
              placeholder="Your Message"
              className="border-[3px] border-black p-2 rounded-lg text-black h-[150px] md:h-[120px] flex-shrink-0 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-[30px] py-[12px] md:py-[12px] w-full md:w-[180px] rounded-full hover:bg-gray-800 transition-all duration-300 flex-shrink-0"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
