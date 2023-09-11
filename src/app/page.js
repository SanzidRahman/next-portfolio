import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import Skill from "@/components/skills";

export default function Home() {
  return (
   
     <main className="flex flex-col justify-center items-center">
       <Intro />
       <SectionDivider />
       <About />
       <SectionDivider />
       <Projects />
       <SectionDivider />
       <Skill />
       <SectionDivider />
       <Experience />
       <SectionDivider />
       <Contact />
       

     </main>
   
  )
}
