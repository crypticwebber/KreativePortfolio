import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
