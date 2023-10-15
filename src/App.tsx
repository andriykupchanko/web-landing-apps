import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx"
import Info from "./components/Info.tsx";
import NavBar from "./components/Navbar.tsx"
import Pricing from "./components/Pricing.tsx";

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Info/>
    <Pricing/>
    <Contact/>
    <Footer/>
    </>
  );

}

export default App
