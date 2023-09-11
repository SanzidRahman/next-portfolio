import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Photo from "../../public/assects/logo-white.png";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex justify-center items-center">
        <div>
          <Image
            src={Photo}
            height={200}
            width={200}
            priority={true}
            quality={95}
            className="h-24 w-24 rounded-full object-cover border border-white shadow-lg shadow-red-600"
          />
        </div>
      </div>
      <p className="mb-10  mt-4 px-4 text-2xl sm:text-4xl   ">
        {" "}
        Hello ! I'm <span>Sanzid Rahman!</span> A front-developer I enjoy to
        build in website & apps{" "}
        <span>My focus in React specially in Next.js</span>{" "}
      </p>
      <div className="flex flex-col ml-4 sm:flex-row sm:ml-20">
        <Link
          className="bg-slate-700 py-3 px-2 flex justify-center items-center rounded-full gap-2 my-2 sm:mx-3 pl-4 pr-3 text-center"
          href="#contact"
        >
          {" "}
          Contact me Here <BsArrowRight />{" "}
        </Link>
        <a className="bg-fuchsia-200 py-3 px-2 flex justify-center items-center rounded-full gap-2 my-2 sm:mx-3 pl-4 pr-3 text-center cursor-pointer" href="/CV.pdf" download={true}>
          Download CV <HiDownload />
        </a>
        <a className="bg-fuchsia-200 py-3 px-2 flex justify-center items-center rounded-full gap-2 my-2 sm:mx-3 p-6  text-center cursor-pointer" href="http://" target="_blank">
          {" "}
          <BsLinkedin />
        </a>
        <a className="bg-fuchsia-200 py-3 px-2 flex justify-center items-center rounded-full my-2 sm:mx-3 p-6  text-center cursor-pointer" href="http://" target="_blank">
          {" "}
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
