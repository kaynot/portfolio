import { Navbar } from "./components/navbar";
import { Intro } from "./components/intro";
import { Skill } from "./components/skill";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="w-full h-full bg-bg-img2  text-white px-4 sm:px-6 lg:px-8">
    <Navbar/>
    <Intro/>
    <Services/>
    {/* <Projects/> */}
    <About/>
    <Skill/>
    <Experience/>
    <Contact/>
    <Footer/>
</main>
  );
}
