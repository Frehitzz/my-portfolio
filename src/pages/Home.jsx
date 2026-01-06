import Navbar from "../components/Navbar.jsx";
import Mainheader from "../components/Header.jsx";
import Counter from "../components/Counter.jsx";
import Aboutme from "../components/Aboutme.jsx";
import Timeline from "../components/Timeline.jsx";
import Softskills from "../components/Softskills.jsx";
import Likebutton from "../components/Likebutton.jsx";

function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-25">
      <div className="lg:min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:h-[80vh]">
          <Mainheader />
          <div className="mt-auto">
            <Counter />
          </div>
        </div>
      </div>
      <Aboutme />
      <Timeline />
      <h1 className="text-center text-3xl text-bold text-[#91ff00]">
        SOFT SKILLS
      </h1>
      <Softskills />
      <div className="flex flex-col items-center gap-2 mb-50">
        <h1 className="text-4xl text-bold text-center text-white">
          Thank you for visiting my portfolio!
        </h1>
        <p className="text-[#599c02]">You can leave a like</p>
        <Likebutton />
      </div>
    </div>
  );
}
export default Home;
