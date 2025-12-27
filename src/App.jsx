import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CockTail from "./Components/CockTail";




gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <CockTail />
      <div className="h-dvh bg-black" />
    </main>
  )
}

export default App
