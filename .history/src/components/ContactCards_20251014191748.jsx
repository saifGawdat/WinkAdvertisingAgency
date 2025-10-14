export default function ContactCards() {
    return (
      <div className="flex-col flex items-center justify-center gap-4 ">
        <div className="w-screen h-[50vh] contactCards flex flex-col md:flex-row items-center justify-center gap-8 p-4 overflow-x-auto">
          <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px]  flex flex-col items-center justify-center gap-2 max-[400px]:w-[250px] max-[400px]:h-[250px]">
            <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px] max-[400px]:text-[20px] max-[400px]:">
              <i className="fa-solid fa-envelope"></i>
            </div>{" "}
            <h4 className="text-xl font-bold">Email</h4>
            <p className="font-semibold text-lg">winkadv.agency@gmail.com</p>
          </div>
          <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px]  flex flex-col items-center justify-center gap-2 max-[400px]:w-[250px] max-[400px]:h-[250px]">
            <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px] max-[400px]:text-[20px] max-[400px]:">
              <i className="fa-solid fa-phone"></i>
            </div>{" "}
            <h4 className="text-xl font-bold">Phones</h4>
            <p className="font-semibold text-lg">(+20) 114 633 9518</p>
            <p className="font-semibold text-lg">(+20) 109 895 5668</p>
          </div>
          <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px]  flex flex-col items-center justify-center gap-2 max-[400px]:w-[250px] max-[400px]:h-[250px]">
            <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px] max-[400px]:text-[20px] max-[400px]:">
              <i className="fa-solid fa-location-dot"></i>
            </div>{" "}
            <h4 className="text-xl font-bold">Address</h4>
            <p className="font-semibold text-lg text-center">
              Egypt - Tanta, Tout Ankh Amoun St with Elmoayed St, Building 22
            </p>
          </div>
        </div>
        <div className="findUs flex-row items-center justify-center gap-4 p-4 flex">
          <p>Find us here </p>
          <div className="flex items-center justify-center text-[30px] text-white bg-black rounded-full w-[50px] h-[50px]">
            <a
              className="items-center justify-center flex text-center"
              target="_blank"
              href="https://www.facebook.com/Winkadv.ag/"
            >
              {" "}
              <i className="fa-brands fa-facebook"> </i>
            </a>
          </div>{" "}
          <div className="flex items-center justify-center text-[30px] text-white bg-black rounded-full w-[50px] h-[50px]">
            <a
              className="items-center justify-center flex text-center"
              target="_blank"
              href="https://www.instagram.com/winkadv.ag/"
            >
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>{" "}
          <div className="flex items-center justify-center text-[30px] text-white bg-black rounded-full w-[50px] h-[50px]">
            <a
              className="items-center justify-center flex text-center"
              target="_blank"
              href="https://www.tiktok.com/@winkadv.ag"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>{" "}
        </div>
        All Rights Reserved © 2025 Wink Advertising Agency.
      </div>
    );
}