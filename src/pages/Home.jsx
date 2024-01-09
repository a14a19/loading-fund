import Portfolio from "../components/Portfolio"
import HeroSection from "../components/HeroSection"
import CareersSection from "../components/CareersSection"
import Footer from "../components/Footer"
import Team from "../components/TeamSection"
import About from "../components/About"
import Header from "../components/Header"


// * all the components created should be rendered here

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Team />
      <CareersSection />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
