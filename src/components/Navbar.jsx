import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Projects", link: "/projects" },
    { name: "Home", link: "/home" },
    { name: "Contacts", link: "/contact" },
  ];

  return (
    <div className="flex mt-5">
      <ul className="flex items-center justify-center w-full gap-12 text-lg md:text-2xl lg:text-3xl text-white">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={` ${active === item.name ? "text-[#91ff00]" : ""}`}
            onClick={() => setActive(item.name)}
          >
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
