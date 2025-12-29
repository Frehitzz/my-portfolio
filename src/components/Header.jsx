import profilePic from "../assets/images/me.jpg";
import { CiLocationOn } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Mainheader() {
  return (
    <div className="flex items-center gap-50">
      <div className="">
        <h1 className="text-9xl text-[#91ff00]">
          Hi there,
          <br /> Im Fritz Harly
        </h1>
        <div className="">
          <div className="flex gap-1">
            <p className="text-lg text-[#599c02] flex">
              <CiLocationOn className="text-2xl text-[#599c02]" />
              Taguig City, Philippines
            </p>
          </div>

          <p className="text-2xl text-white ml-1">
            A web developer on a journey to full stack mastery
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <p className="w-30 text-lg flex items-center justify-center gap-2 p-3 border rounded-4xl border-[#91ff00] text-white">
            Resume
            <span>
              <IoMdDownload />
            </span>
          </p>

          <p className="text-4xl text-white">|</p>

          <div className="links flex gap-4">
            <a href="#" className="social-link facebook">
              <CgFacebook className="icon text-4xl rounded-full border-[#91ff00] text-white" />
            </a>

            <a href="#" className="social-link instagram">
              <FaInstagram className="icon text-4xl rounded-full border-[#91ff00] text-white" />
            </a>

            <a href="#" className="social-link linkedin">
              <RiLinkedinFill className="icon text-4xl rounded-full text-white" />
            </a>

            <a
              href="https://github.com/Frehitzz"
              className="social-link github"
            >
              <FaGithub className="icon text-4xl rounded-full border-[#91ff00] text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-93 h-93 rounded-full bg-[#91ff00] flex items-center justify-center">
        <div className="image-container w-90 h-90 rounded-full bg-[url('../assets/images/me.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
}
export default Mainheader;
