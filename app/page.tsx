import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projetos from "./components/Projetos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className=" ">
      <NavBar />
      <Hero />
      <Projetos />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
