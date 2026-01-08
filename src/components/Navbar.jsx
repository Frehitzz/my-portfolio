import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
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
            className={` ${
              location.pathname === item.link ? "text-[#91ff00]" : ""
            }`}
          >
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
