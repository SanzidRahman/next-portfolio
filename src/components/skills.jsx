import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Skill() {
  return (
    <section>

        <SectionHeading>MySkill</SectionHeading>
        <ul className="flex flex-wrap justify-center items-center max-w-[40rem]">
            {
                skillsData.map((skill,index) => (
                    <li className="p-2 bg-gray-300 space-x-3 m-2 rounded-full pl-4 pr-4" key={index}>{skill}</li>
                ))
            }
        </ul>

    </section>
  )
}
