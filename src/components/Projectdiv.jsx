import { useState } from "react";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/js.png";
import Php from "../assets/images/php.png";
import Mysql from "../assets/images/mysql.png";
import Dreambooking from "../assets/images/dreambooking.jpg";
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
      name: "DreamBooking",
      description: "An airbnb like system, apartment rental",
      stack: [Html, Css, Js, Php, Mysql],
      background: Dreambooking,
    },
  ];

  return (
    <div className="grid">
      {itemProjects.map((item) => (
        <div className="w-1/8">
          <img className="w-40 h-20" src={item.background}></img>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <div className="flex gap-2">
            {item.stack.map((tech, index) => (
              <div className="rounded-full bg-black border border-white w-auto">
                <img key={index} src={tech} className="w-10 h-10 p-2" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projectdiv;
