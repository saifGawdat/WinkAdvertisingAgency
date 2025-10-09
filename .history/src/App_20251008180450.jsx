import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Founders from "./components/Founders";


function App() {
  return (
    <>
      <Nav />
      <HomePage />
      <AboutUs/>
      <Founders/>
    </>
  );
}

export default App;
