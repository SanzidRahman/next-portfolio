import { links } from "@/lib/data";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-black bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      >
        {" "}
      </div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
      sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          { links.map((link) => {
            return (
              <li className=" flex justify-center items-center h-3/4">
                <Link className="flex justify-center text-center py-3 px-3 hover:text-fuchsia-700 transition" href={link.hash}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
