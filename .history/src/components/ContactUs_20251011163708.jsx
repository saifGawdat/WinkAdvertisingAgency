import {useState,useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ContactUs() {
    return(
        <section id="contactUs" className="w-screen h-screen flex flex-col items-center justify-start">
            <h2 className="text-black text-center font-bold text-[32px] md:text-[48px] mt-[5px]">Contact Us</h2>
            <div className="formIframe flex flex">

            </div>

        </section>
    )
}
