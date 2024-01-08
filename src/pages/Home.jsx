import HeroSection from "../components/HeroSection";
import CareersSection from "../components/CareersSection";
import Footer from "../components/Footer";
import Portfolio from "../components/portfolio"
// * all the components created should be rendered here

function Home() {
  return (
    <>
      <HeroSection />
      <CareersSection />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
