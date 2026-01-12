import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Projects", link: "/projects" },
    { name: "Contacts", link: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden lg:flex justify-between mt-5 px-15">
        <div className="flex">
          <h1 className="text-white text-3xl">Fritzharly.</h1>
        </div>
        <div className="">
          <ul className="flex items-center w-full gap-12 text-lg md:text-2xl lg:text-2xl text-white">
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
      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden flex justify-between items-center p-2">
        <div className="">
          <h1 className="text-white text-2xl">Fritzharly.</h1>
        </div>
        <div onClick={toggleMenu} className="text-white flex items-center p-2">
          {isOpen ? (
            <IoMdClose className="text-2xl" /> // close icon
          ) : (
            <FaHamburger className="text-2xl" /> // burger icon
          )}
        </div>
      </div>

      {/* SDLIDING CONTAINER */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            <IoMdClose className="text-2xl" />
          </button>
          <ul className="flex flex-col gap-8 text-white text-2xl">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${
                  location.pathname === item.link ? "text-[#91ff00]" : ""
                }`}
              >
                <NavLink to={item.link} onClick={toggleMenu}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
