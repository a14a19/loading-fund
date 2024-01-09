import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "./Main";
import { Routes, Route } from "react-router-dom";

// * all the components created should be rendered here

function Home() {
  return (
    <div id="home">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
