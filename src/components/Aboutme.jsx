import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";

function Aboutme() {
  const programLang = [
    { id: 1, icon: FaHtml5 },
    { id: 2, icon: FaCss3 },
    { id: 2, icon: FaJs },
    { id: 2, icon: RiPhpFill },
    { id: 2, icon: GrMysql },
  ];

  const frameTools = [
    { id: 1, icon: FaReact },
    { id: 2, icon: RiTailwindCssFill },
    { id: 3, icon: FaGitAlt },
    { id: 4, icon: FaGithub },
    { id: 5, icon: VscVscode },
    { id: 6, icon: FaFigma },
  ];

  const education = [
    {
      id: 1,
      level: "HIGH SCHOOL",
      name: "Army's Angel Integrated School",
      year: "2020 - 2022",
    },
    {
      id: 2,
      level: "COLLEGE",
      name: "Rizal Technological University",
      year: "2022 - PRESENT",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-3xl mt-15 text-[#91ff00] text-bold">
        ABOUT ME
      </h1>

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
                {programLang.map((item) => {
                  const Icon = item.icon;
                  return <Icon key={item.id} />;
                })}
              </div>
              <div className="scroll-left inline-flex gap-4">
                {programLang.map((item) => {
                  const Icon = item.icon;
                  return <Icon key={`duplicate-${item.id}`} />;
                })}
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
                {frameTools.map((item) => {
                  const Icon = item.icon;
                  return <Icon key={item.id} />;
                })}
              </div>
              <div className="scroll-left inline-flex gap-4">
                {frameTools.map((item) => {
                  const Icon = item.icon;
                  return <Icon key={`duplicate-${item.id}`} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {/* EDUCATION CONTAINER */}
        <div className="min-h-40 rounded-lg flex flex-col p-2 border border-[#91ff00]">
          <p className="text-[#91ff00] text-lg font-bold text-center">
            EDUCATION
          </p>
          <div className="flex justify-between mt-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-col items-center">
                <h1 className="text-[#599c02]">{edu.level}</h1>
                <p className="text-center text-white">{edu.name}</p>
                <p className="text-[#91ff00]">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
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
