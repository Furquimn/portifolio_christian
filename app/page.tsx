import AboutMe from "./components/AboutMe";
import HomeHero from "./components/Hero";
import HomeNavBar from "./components/NavBar";
import Projetos from "./components/Projetos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className=" ">
      <HomeNavBar />

        <HomeHero />
        <Projetos />
        <AboutMe/>
        <Contact/>
        <Footer/>
    </main>
  );
}
