import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Founders from "./components/Founders";
import TeamMembers from "./components/TeamMembers";
import Services from "./components/Services";


function App() {
  return (
    <>
      <Nav />
      <HomePage />
      <AboutUs/>
      <Founders/>
      <TeamMembers/>
      <Services/>
      <Projects/>
    </>
  );
}

export default App;
