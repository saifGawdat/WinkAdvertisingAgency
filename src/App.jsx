import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Founders from "./components/Founders";
import TeamMembers from "./components/TeamMembers";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import ContactCards from "./components/ContactCards";
import HomePage from "./pages/HomePage.jsx";


function App() {
  return (
    <>
      <HomePage />
      <AboutUs/>
      <Services/>
      <Projects/>
      <ContactUs/>
      <ContactCards/>
      <Founders/>
      <TeamMembers/>
    </>
  );
}

export default App;
