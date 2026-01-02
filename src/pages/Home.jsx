import Navbar from "../components/Navbar.jsx";
import Mainheader from "../components/Header.jsx";
import Counter from "../components/Counter.jsx";
import Aboutme from "../components/Aboutme.jsx";

function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-25">
      <Navbar />
      <div className="lg:min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:h-[80vh]">
          <Mainheader />
          <div className="mt-auto">
            <Counter />
          </div>
        </div>
      </div>
      <Aboutme />
    </div>
  );
}
export default Home;
