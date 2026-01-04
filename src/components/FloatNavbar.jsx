import { useEffect, useState } from "react";
function FloatNavbar() {
  // Handle scroll
  const [show, setShow] = useState(false);
  // For clicked nav item
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200); // if user scroll vertically greater than 200
    };

    // created an event and it adds the useEffect handleScroll
    window.addEventListener("scroll", handleScroll);
    // removing the added enet listener for when the developer remove the navbar theres no memory leak
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // items for floating navbar
  const navItems = ["Projects", "Home", "Contact"];

  return (
    // if user been scrolled greater than 200px then display the nav
    <div
      className={`fixed bottom-10 transition-all duration-300 left-1/2 -translate-x-1/2  
        ${
          show
            ? // if user been scrolled greater than 200px then display the nav
              "opacity-100 translate-y-0"
            : //   if not hide it
              "opacity-0 translate-y-6 pointer-events-none"
        }`}
    >
      <div className="flex justify-center">
        <ul className="flex gap-10 p-2 border w-70 rounded-3xl justify-center items-center border-[#91ff00] text-white bg-white/20 backdrop-blur-md">
          {navItems.map(
            (
              item // using map to display navitems
            ) => (
              <li
                className={`text-lg ${
                  active === item ? "text-[#91ff00] font-bold" : ""
                }`}
                key={item}
                onClick={() => setActive(item)} // if the user click the item it put the item on setActive
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
export default FloatNavbar;
