import { Routes, Route } from "react-router-dom";

import Mainlayout from "./layout/Mainlayout";
import About from "./pages/About";
import Hero from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <Mainlayout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="about" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Footer" element={<Footer />} />
      </Routes>
    </Mainlayout>
  );
}
