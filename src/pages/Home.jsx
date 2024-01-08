import HeroSection from "../components/HeroSection"
import CareersSection from "../components/CareersSection"
import Footer from "../components/Footer"
import Team from "../components/TeamSection"
// * all the components created should be rendered here

function Home() {
  return (
    <>
      <HeroSection />
      <Team />
      <CareersSection />
      <Footer />
    </>
  )
}

export default Home
