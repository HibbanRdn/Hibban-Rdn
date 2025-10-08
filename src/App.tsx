import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experiences } from "./components/Experiences";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
