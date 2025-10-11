export default function ContactCards() {
    return (
      <div className="w-screen h-screen bg-red-500">
        <div className="card bg-black w-[300px] h-[300px] text-white rounded-[30px] p-[40px] flex flex-col items-center justify-center gap-2">
          <i class="fa-solid fa-envelope text-black bg-white rounded-full p-10"></i>{" "}
          <h4 className="text-xl font-bold">Email</h4>
          <p className="font-semibold text-lg">winkadv.agency@gmail.com</p>
        </div>
      </div>
    );
}