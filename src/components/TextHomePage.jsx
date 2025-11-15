export default function TextHomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="font-bold text-[42px] text-center mb-4 md:text-[68px] homeText">
        WE KNOW <br /> WHAT YOU WANT
      </h2>
      <div className="flex flex-col md:flex-row gap-2.5 mt-5! md:mt-0!">
        <button className="bg-black text-white px-23! py-3! rounded-[30px] hover:bg-white hover:text-black hover:border-black hover:border-2 cursor-pointer transition-all duration-300">
          <a href="#contactUs">Let&apos;s Begin</a>
        </button>
        <button className="bg-white text-black px-22! py-3! rounded-[30px] hover:bg-black hover:text-white hover:border-black hover:border-2 cursor-pointer transition-all duration-300 border-black border">
          <a href="#projects">See Our Work</a>
        </button>
      </div>
    </div>
  );
}
