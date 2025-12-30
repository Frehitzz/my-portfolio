import Navbar from "../components/Navbar.jsx";
import Mainheader from "../components/Header.jsx";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <Mainheader />
      </div>
    </div>
  );
}
export default Home;
