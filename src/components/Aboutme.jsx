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
    { id: 1, icon: FaHtml5, name: "HTML5" },
    { id: 2, icon: FaCss3, name: "CSS3" },
    { id: 2, icon: FaJs, name: "JavaScript" },
    { id: 2, icon: RiPhpFill, name: "Php" },
    { id: 2, icon: GrMysql, name: "MySQL" },
  ];

  const frameTools = [
    { id: 1, icon: FaReact, name: "React" },
    { id: 2, icon: RiTailwindCssFill, name: "Tailwind" },
    { id: 3, icon: FaGitAlt, name: "Git" },
    { id: 4, icon: FaGithub, name: "Github" },
    { id: 5, icon: VscVscode, name: "Vscode" },
    { id: 6, icon: FaFigma, name: "Figma" },
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
      <h1 className="text-center text-3xl md:text-4xl my-7 lg:my-10 text-[#91ff00] text-bold">
        ABOUT ME
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-3 gap-4 mt-5">
        {/* SHORT DESCRIPTION CONTAINER */}
        <div className="rounded-lg min-h-40 md:min-h-45 bg-[url('../assets/images/program.jpg')] bg-cover bg-center lg:col-span-2 lg:row-span-2">
          <div className="">
            <p className="p-2 text-white text-lg md:text-2xl font-bold w-60">
              Front-end developer with PHP/MySQL experience and, learning MERN
              stack.
            </p>
          </div>
        </div>

        {/* TECH STACK CONTAINER */}
        <div className="rounded-lg flex flex-col p-2 border border-[#91ff00] lg:col-span-3">
          <p className="text-[#91ff00] text-lg md:text-2xl font-bold text-center">
            PROGRAMMING LANGUAGES
          </p>
          {/* INFINITE SCROLLING CAROUSEL EFFECT */}
          <div className="scroll-container flex-1 flex items-center overflow-hidden">
            <div className="scroll-wrapper inline-flex text-5xl gap-4 text-white">
              {/* Render the array twice for seamless loop */}
              {[
                ...programLang,
                ...programLang,
                ...programLang,
                ...programLang,
                ...programLang,
                ...programLang,
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="relative group" key={`icon-${index}`}>
                    <Icon className="cursor-pointer" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-[#91ff00] text-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* FRAMEWORKS AND TOOLS CONTAINER */}
        <div className="rounded-lg flex flex-col p-2 border border-[#91ff00] lg:col-span-3">
          <p className="text-[#91ff00] text-lg md:text-2xl font-bold text-center">
            FRAMEWORKS & TOOLS
          </p>
          <div className="scroll-container flex-1 flex items-center overflow-hidden">
            <div className="scroll-wrapper inline-flex text-5xl gap-4 text-white">
              {/* Render the array twice for seamless loop */}
              {[
                ...frameTools,
                ...frameTools,
                ...frameTools,
                ...frameTools,
                ...frameTools,
                ...frameTools,
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="relative group" key={`icon-${index}`}>
                    <Icon className="cursor-pointer" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-[#91ff00] text-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* EDUCATION CONTAINER */}
        <div className="min-h-40 md:min-h-45 rounded-lg flex flex-col p-2 border border-[#91ff00] lg:col-span-5">
          <p className="text-[#91ff00] text-lg md:text-2xl font-bold text-center">
            EDUCATION
          </p>
          <div className="flex justify-center gap-5 mt-3 items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-[#599c02] md:text-lg lg:text-2xl">
                {education[0].level}
              </h1>
              <p className="text-center text-white md:text-lg lg:text-2xl">
                {education[0].name}
              </p>
              <p className="text-[#91ff00] md:text-lg">{education[0].year}</p>
            </div>

            <div className="w-32 md:w-48 lg:w-80 h-0.5 bg-[#91ff00]"></div>

            <div className="flex flex-col items-center">
              <h1 className="text-[#599c02] md:text-lg lg:text-2xl">
                {education[1].level}
              </h1>
              <p className="text-center text-white md:text-lg lg:text-2xl">
                {education[1].name}
              </p>
              <p className="text-[#91ff00] md:text-lg">{education[1].year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
