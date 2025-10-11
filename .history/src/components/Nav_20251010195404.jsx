import { useState } from "react";
import AboutUs from "./AboutUs";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav style={{ marginTop: "20px" }} className="flex justify-center">
      <div
        style={{
          padding: "15px 50px",
        }}
        className="flex justify-center items-center bg-black text-white rounded-full gap-[30px]"
      >
        <img
          className="w-[110px]"
          src="/src/assets/white logo cropped2.webp"
          alt="logo"
        />
        <ul
          className={`flex flex-row gap-[100px] ${
            isMenuOpen
              ? "max-[1050px]:flex max-[1050px]:fixed max-[1050px]:inset-0 max-[1050px]:w-screen max-[1050px]:h-screen max-[1050px]:bg-black max-[1050px]:text-white max-[1050px]:justify-center max-[1050px]:items-center max-[1050px]:z-50 max-[1050px]:flex-col max-[1050px]:gap-6"
              : "max-[1050px]:hidden"
          }`}
        >
          <li className=" hover:border-b-[1px] ">
            <a href="/">Home</a>
          </li>
          <li className=" hover:border-b-[2px]">
            <a href="#aboutUs">About Us</a>
          </li>
          <li className=" hover:border-b-[2px]">
            <a href="#services">Services</a>
          </li>
          <li className=" hover:border-b-[2px]">
            <a href="#projects">Projects</a>
          </li>
          <li className=" hover:border-b-[2px]">
            <a href="#contactUs">Contact Us</a>
          </li>
        </ul>
        <button
          type="button"
          className={`items-center justify-center text-white hidden max-[1050px]:inline-flex ${
            isMenuOpen ? "fixed top-4 right-4 z-[60]" : ""
          }`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <i
            className={`${
              isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }`}
          ></i>
        </button>
      </div>
    </nav>
  );
}
