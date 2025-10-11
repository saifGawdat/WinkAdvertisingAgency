export default function ContactCards() {
    return (
      <div className="w-screen h-[50vh] contactCards flex flex-col md:flex-row items-center justify-center gap-8 p-4 overflow-x-auto">
        <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px] flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-solid fa-envelope"></i>
          </div>{" "}
          <h4 className="text-xl font-bold">Email</h4>
          <p className="font-semibold text-lg">winkadv.agency@gmail.com</p>
        </div>
        <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px] flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-solid fa-phone"></i>
          </div>{" "}
          <h4 className="text-xl font-bold">Phones</h4>
          <p className="font-semibold text-lg">(+20) 114 633 9518</p>
          <p className="font-semibold text-lg">(+20) 109 895 5668</p>
        </div>
        <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px] flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-solid fa-location-dot"></i>
          </div>{" "}
          <h4 className="text-xl font-bold">Address</h4>
          <p className="font-semibold text-lg text-center">
            Egypt - Tanta, Tout Ankh Amoun St with Elmoayed St, Building 22
          </p>
        </div>
        <div className="findUs">
          <p>Find us here </p>
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-brands fa-facebook"></i>
          </div>{" "}
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-brands fa-instagram"></i>
          </div>{" "}
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-brands fa-tiktok"></i>
          </div>{" "}
        </div>
      </div>
    );
}