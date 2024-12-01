import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "5px",
          transformOrigin: "left",
          backgroundColor: "#99ffff",
          borderRadius:"10px"
        }}
        className="fixed top-0 left-0 h-1 w-full z-50"></motion.div>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
