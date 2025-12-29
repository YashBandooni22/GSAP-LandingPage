import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CockTail from "./Components/CockTail";
import About from "./Components/About";
import Art from "./Components/Art";
import Menu from "./Components/Menu ";




gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <CockTail />
      <About />
      <Art/>
      <Menu />
    </main>
  )
}

export default App
