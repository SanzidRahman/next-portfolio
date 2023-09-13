import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section className="scroll-mt-28" id="projects">
    <SectionHeading>Projects</SectionHeading>
    {/* <div className="z-10"> */}
        {
          projectsData.map((project,index) => (
        <React.Fragment key={{index}}>
        <Project {...project} />
        </React.Fragment>
    ))
        }
    {/* </div> */}
        
    </section>
  )
}

//destructuring here by curlyBraces...

function Project ({title,description,tags,imageUrl}){
    return (
    <section id="projects" className="-z-10 bg-slate-100  max-w-[42rem] border border-gray-300 mb-2 relative overflow-hidden h-[20rem] flex sm:rounded-full sm:scroll-mt-28">
    <div className="flex flex-col basis-[45%] justify-center items-center ">
    <h1 className="text-2xl mt-3 mb-3">{title}</h1>
      <p className="pl-4 pr-4 sm:ml-2">{description}</p>
      <ul className="flex flex-wrap sm: justify-center ">
        {
            tags.map((tag,index) => (
                <li key={index}   className="bg-purple-400/40 p-1 pl-3 pr-3  m-1 rounded-full ">{tag}</li>
            ))
        }
      </ul>
    </div>
      {/* <div className="basis-1/2 hover:scale-100"> */}
      <Image
        src={imageUrl}
        priority={true}
        quality={95}
        className="h-[300px] w-[300px] absolute top-8 -right-[50px]"
     />
      {/* </div> */}

    </section>
    )
}