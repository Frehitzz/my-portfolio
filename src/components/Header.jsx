import profilePic from "../assets/images/me.jpg";
import { CiLocationOn } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Resume from "../assets/RESUME.pdf";

function Mainheader() {
  return (
    <div className="md:flex md:justify-center md: items-center md:gap-10 md:mt-10 lg:mt-15">
      {/* CIRCLE PORFILE */}
      <div className="flex justify-center">
        <div className="flex w-53 h-53 md:w-63 md:h-63 lg:w-83 lg:h-83 rounded-full bg-[#91ff00] items-center justify-center mt-8 lg:mt-0">
          <div className="w-50 h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full bg-[url('../assets/images/me.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
      <div className="">
        {/* MAIN HEAD TEXT */}
        <div className="flex items-center justify-center mt-8 md:block">
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-[#91ff00]">
            Hi there,
            <br className="hidden sm:hidden md:block" /> I'm Fritz Harly
          </h1>
        </div>

        {/* LOCATION AND DESCRIPTION */}
        <div className="flex flex-col justify-center">
          {/* LOCATION */}
          <div className="flex gap-1 justify-center items-center md:justify-start">
            <p className="flex text-lg md:text-2xl text-[#599c02] items-center">
              <CiLocationOn className="text-2xl text-[#599c02]" />
              Taguig City, Philippines
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="flex items-center">
            <p className="text-lg md:text-2xl md:text-start md:ml-1 text-white text-center">
              A web developer on a journey to full stack mastery
            </p>
          </div>
        </div>

        <div className="md:flex mt-4 items-center gap-4">
          {/* RESUME CONTAINER */}
          <button className=" w-full holographic-card text-lg flex md:w-30 lg:w-50 items-center justify-center gap-2 p-3 border rounded-4xl border-[#91ff00] text-white">
            <a
              href={Resume}
              target="_blank" // open new tab
              rel="noopener noreferrer" // preventing the new page from accessing the original window
              className="flex items-center gap-2"
            >
              Resume
              <span>
                <IoMdDownload />
              </span>
            </a>
          </button>

          {/* UNCOMMENT FOR WIDER DEVICE */}
          <p className="hidden sm:hidden md:block text-4xl text-white">|</p>

          {/* LINKS CONTAINER */}
          <div className="links flex gap-4 justify-center mt-4 md:mt-0">
            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/fritz.harly.3"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <CgFacebook className="icon text-4xl rounded-full border-[#91ff00] text-white" />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/frehitz_____/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <FaInstagram className="icon text-4xl rounded-full border-[#91ff00] text-white" />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/fritz-harly-degamo-35b37530a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <RiLinkedinFill className="icon text-4xl rounded-full text-white" />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Frehitzz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
            >
              <FaGithub className="icon text-4xl rounded-full border-[#91ff00] text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mainheader;
