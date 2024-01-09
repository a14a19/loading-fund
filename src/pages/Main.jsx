import Team from "../components/TeamSection"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import HeroSection from "../components/HeroSection"
import CareersSection from "../components/CareersSection"

function Main() {
    return (
        <>
            <HeroSection />
            <About />
            <Team />
            <CareersSection />
            <Portfolio />
        </>
    )
}

export default Main