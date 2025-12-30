import Navbar from "../components/Navbar.jsx";
import Mainheader from "../components/Header.jsx";
import Counter from "../components/Counter.jsx";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="">
          <Mainheader />
          <Counter />
        </div>
      </div>
    </div>
  );
}
export default Home;
