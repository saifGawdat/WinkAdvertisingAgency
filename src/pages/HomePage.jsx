import Nav from "../components/Nav";
import TextHomePage from "../components/TextHomePage";

export default function HomePage() {
  return (
    <div
      className="flex flex-col items-start justify-start min-h-screen w-full"
      id="homepage"
    >
      <div className="w-full flex justify-center">
        <Nav />
      </div>

      {/* left-aligned content container */}
      <div className="w-full flex justify-start items-start mt-30! md:ml-10!">
        <div className="w-full md:w-1/2">
          <TextHomePage />
        </div>
      </div>
    </div>
  );
}
