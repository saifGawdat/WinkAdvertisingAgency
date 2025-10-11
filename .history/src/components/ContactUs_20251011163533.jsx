import {useState,useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ContactUs() {
    return(
        <section id="contactUs" className="w-screen h-screen flex flex-col items-center justify-center">
            <h2 className="text-black text">Contact Us</h2>

        </section>
    )
}
