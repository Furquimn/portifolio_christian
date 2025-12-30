import AboutMe from "./components/AboutMe";
import HomeHero from "./components/Hero";
import HomeNavBar from "./components/NavBar";
import Projetos from "./components/Projetos";


export default function HomePage() {
  return (
    <main className=" ">
      <HomeNavBar />

        <HomeHero />
        <Projetos />
        <AboutMe/>

    </main>
  );
}
