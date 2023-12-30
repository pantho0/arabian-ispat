import Banner from "../../Components/Home/Banner";
import Features from "../../Components/Home/Features";
import AboutUs from "../../Components/Home/AboutUs";
import Products from "../../Components/Home/Products";
import Environment from "../../Components/Home/Environment";
import QualityAssurance from "../../Components/Home/QualityAssurance";
import Contact from "../../Components/Home/Contact";
import Footer from "../../Components/Shared/Footer";


const Home = () => {
  return (
    <>
     <Banner/>
     <Features/>
     <Products/>
     <AboutUs/>
     <Environment/>
     <QualityAssurance/>
     <Contact/>
     <Footer/>
    </>
  );
};

export default Home;
