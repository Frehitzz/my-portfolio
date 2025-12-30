function Navbar() {
  return (
    <div className="flex mt-5">
      <ul className="flex items-center justify-center w-full gap-12 text-2xl text-white">
        <li>
          <a href="../pages/Home.jsx">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
