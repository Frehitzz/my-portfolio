import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
function Aboutme() {
  return (
    <div>
      <h1 className="text-center text-2xl mt-8">ABOUT ME</h1>

      <div className="grid grid-cols-1 grid-rows-3 gap-4 mt-5">
        {/* SHORT DESCRIPTION CONTAINER */}
        <div className="rounded-lg min-h-40 bg-[url('../assets/images/program.jpg')] bg-cover bg-center">
          <div className="">
            <p className="p-2 text-white text-lg font-bold w-50">
              Front-end developer with PHP/MySQL experience and, learning MERN
              stack.
            </p>
          </div>
        </div>

        {/* TECH STACK CONTAINER */}
        <div className="rounded-lg flex flex-col p-2 border border-[#91ff00]">
          <p className="text-[#91ff00] text-lg font-bold text-center">
            PROGRAMMING LANGUAGES
          </p>
          {/* INFINITE SCROLLING CAROUSEL EFFECT */}
          <div className="scroll-container flex-1 flex items-center">
            <div className="inline-flex text-5xl gap-4 text-white">
              <div className="scroll-left inline-flex gap-4">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <RiPhpFill />
                <GrMysql />
              </div>
              <div className="scroll-left inline-flex gap-4">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <RiPhpFill />
                <GrMysql />
              </div>
            </div>
          </div>
        </div>
        {/* FRAMEWORKS AND TOOLS CONTAINER */}
        <div className="rounded-lg flex flex-col p-2 border border-[#91ff00]">
          <p className="text-[#91ff00] text-lg font-bold text-center">
            FRAMEWORKS & TOOLS
          </p>
          <div className="scroll-container flex-1 flex items-center">
            <div className="inline-flex text-5xl gap-4 text-white">
              <div className="scroll-left inline-flex gap-4">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <RiPhpFill />
                <GrMysql />
              </div>
              <div className="scroll-left inline-flex gap-4">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <RiPhpFill />
                <GrMysql />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-pink-300">EDUCATION</div>
      </div>

      {/* DESKTOP GRID */}
      {/* <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="row-span-3 bg-red-300">SHORT DESCRIPTION</div>
        <div className="col-span-2 bg-blue-300">EDUCATION</div>
        <div className="col-span-2 bg-yellow-300">TECH STACK</div>
      </div> */}
    </div>
  );
}
export default Aboutme;
