import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Founders from "./components/Founders";
import TeamMembers from "./components/TeamMembers";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import ContactCards from "./components/ContactCards";


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
      <ContactUs/>
      <ContactCards
    </>
  );
}

export default App;
