export default function ContactCards() {
    return (
      <div className="w-screen h-[50vh] bg-red-500">
        <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px] flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-solid fa-envelope"></i>
          </div>{" "}
          <h4 className="text-xl font-bold">Email</h4>
          <p className="font-semibold text-lg">winkadv.agency@gmail.com</p>
        </div>
        <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px] flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-solid fa-envelope"></i>
          </div>{" "}
          <h4 className="text-xl font-bold">Email</h4>
          <p className="font-semibold text-lg">winkadv.agency@gmail.com</p>
        </div>
        <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px] flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center text-[40px] text-black bg-white rounded-full w-[80px] h-[80px]">
            <i className="fa-solid fa-envelope"></i>
          </div>{" "}
          <h4 className="text-xl font-bold">Email</h4>
          <p className="font-semibold text-lg">winkadv.agency@gmail.com</p>
        </div>
      </div>
    );
}