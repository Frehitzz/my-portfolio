import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
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
      description: "An airbnb like system, apartment rental",
      stack: [Html, Css, Js, Php, Mysql],
      background: Dreambooking,
    },
    {
      name: "Zone",
      description:
        " A simple productivity web app built for my hackathon project It combines a Pomodoro timer, a to-do list, and a GitHub-style session tracker to help students (like me) stay productive, avoid burnout, and keep track of daily progress.",
      stack: [Html, Css, Js],
      background: Zone,
    },
    {
      name: "Zone",
      description:
        " A simple productivity web app built for my hackathon project It combines a Pomodoro timer, a to-do list, and a GitHub-style session tracker to help students (like me) stay productive, avoid burnout, and keep track of daily progress.",
      stack: [Html, Css, Js],
      background: Zone,
    },
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
          <div className="">
            <h1 className="text-2xl text-[#91ff00] pt-3">{item.name}</h1>
            <p className="text-lg text-white py-3">{item.description}</p>
          </div>

          {/* tech stack main container */}
          <div className="flex justify-between items-center w-auto">
            <div className=" flex -space-x-3 rounded-full">
              {item.stack.map((tech, index) => (
                <div className="rounded-full bg-black border border-white/[0.3]">
                  <img key={index} src={tech} className="w-10 h-10 p-2" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 px-2">
              <p className="text-lg text-white">Live Site</p>
              <FaLocationArrow className="text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projectdiv;
