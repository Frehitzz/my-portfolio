import { useState } from "react";
function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Projects", link: "../pages/Home.jsx" },
    { name: "Home", link: "../pages/Home.jsx" },
    { name: "Contacts", link: "../pages/Home.jsx" },
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
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
