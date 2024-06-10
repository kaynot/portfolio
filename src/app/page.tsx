import Image from "next/image";
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
    <main className="w-full h-full bg-gradient-to-b from-black to-gray-900 text-white">
     <Navbar/>
     <Intro/>
     <Services/>
     <Projects/>
     <About/>
     <Skill/>
     <Experience/>
     <Contact/>
     <Footer/>
  </main>
  );
}
