import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/js.png";
import Php from "../assets/images/php.png";
import Mysql from "../assets/images/mysql.png";
import Dreambooking from "../assets/images/dreambooking.jpg";
import Zone from "../assets/images/zone.png";
function Projectdiv() {
  const [content, setContent] = useState();

  const itemProjects = [
    {
      name: "DreamBooking",
      description: "A full-stack apartment rental system.",
      stack: [Html, Css, Js, Php, Mysql],
      background: Dreambooking,
      features: [
        "Secure user authentication with role-based access (renter, owner, admin)",
        "Admin panel for banning users and approving listings",
        "Admin panel for banning users and approving listings",
        "Map-based apartment locations using Leaflet.js",
        "Complete CRUD operations for listings and users",
      ],
      learned:
        "Through this project, I gained hands-on experience building a full-stack web application using PHP and MySQL, including database design, authentication, role-based access, booking management, reporting, data visualization, and Excel exports, while strengthening my problem-solving skills in security, workflow, and usability.",
      liveUrl: "#",
      githubUrl: "#",
    },
    /*-----------------------------*/
    {
      name: "Zone",
      description:
        " A simple productivity web app built for My hackathon project.",
      stack: [Html, Css, Js],
      background: Zone,
      features: [
        "Multi-mode Pomodoro timer with automated session flow, including focus, short breaks, and long breaks.",
        "Cycle logic that triggers a long break after four Pomodoro sessions.",
        "Timer controls (play, pause, stop, skip) for flexible user interaction.",
        "Task management system for organizing and tracking daily to-dos.",
        "GitHub-style activity tracker to visualize productivity progress over time.",
      ],
      learned:
        "Through this project, I improved my skills in state management, timer logic, user interaction handling, and building user-focused features with clear workflow and visual feedback.",
      liveUrl: "https://pomozone.netlify.app",
      githubUrl: "https://github.com/Frehitzz/ZONE",
    },
    /*--------------------------------------------*/
    {
      name: "Zone",
      description:
        " A simple productivity web app built for my hackathon project It combines a Pomodoro timer, a to-do list, and a GitHub-style session tracker to help students (like me) stay productive, avoid burnout, and keep track of daily progress.",
      stack: [Html, Css, Js],
      background: Zone,
    },
  ];

  return (
    // main container
    <div className="grid grid-cols-1 grid-rows-3 gap-3 mb-25 md:mb-30 md:mx-auto lg:mx-0 lg:grid-cols-3 ">
      {itemProjects.map((item) => (
        // mapping container
        <div className="flex flex-col justify-center border border-white/[0.1] p-2 rounded-3xl md:w-100 lg:w-auto">
          {/* img of prohject */}
          <div className="md:flex md:justify-center">
            <img
              className=" w-80 h-45 md:w-115 md:h-60 bg-cover bg-center rounded-2xl"
              src={item.background}
            ></img>
          </div>
          {/* PROJECT NAME AND DESC */}
          <div className="">
            <h1 className="text-2xl text-[#91ff00] pt-3">{item.name}</h1>
            <p className="text-lg text-white py-3">{item.description}</p>
          </div>
          {/* PROJECT FEATURES */}
          <div className="text-white mb-3">
            <ul className="list-disc pl-5">
              {item.features?.map((features, index) => (
                <li key={index}>{features}</li>
              ))}
            </ul>
          </div>
          {/* LEARNED ON PROJECTS */}
          <div className="text-white">
            <p>{item.learned}</p>
          </div>

          {/* tech stack main container */}
          <div className=" justify-between items-center w-auto">
            <div className=" flex -space-x-3 rounded-full my-2">
              {item.stack.map((tech, index) => (
                <div className="rounded-full bg-black border border-white/[0.3]">
                  <img key={index} src={tech} className="w-10 h-10 p-2" />
                </div>
              ))}
            </div>
            {/* liveSite and Github URl */}
            <div className="flex items-center gap-3 px-2">
              <div className="flex items-center gap-2 border border-[#91ff00] py-1 px-3 rounded-2xl">
                <FaExternalLinkAlt className="text-white" />
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white"
                >
                  Live Site
                </a>
              </div>
              <div className="flex items-center gap-2 border border-white py-1 px-3 rounded-2xl">
                <FaGithub className="text-white" />
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projectdiv;
