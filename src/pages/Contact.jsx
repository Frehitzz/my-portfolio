import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";
function Contact() {
  const [copied, setCopy] = useState(false);

  // COPY EMAIL
  const copy = () => {
    navigator.clipboard.writeText("fritzharlydegamo@gmail.com");
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="lg:flex lg:flex-col lg:items-center mt-5 px-4 md:px-15 lg:px-0">
      <h1 className="text-2xl md:text-3xl lg:text-4xl py-4 text-[#91ff00] text-center">
        Get in touch
      </h1>
      {/* FORM */}
      <form className="lg:w-200">
        <div className="flex flex-col md:flex-row gap-4 text-white">
          {/* name */}
          <div className="md:flex-1">
            <label className="text-lg">Name</label>
            <br />
            <input
              className="font-light text-white/[0.5] outline-none p-2 border border-white/[0.2] w-full rounded"
              type="text"
              placeholder="Your Identity"
              required
            ></input>
          </div>
          {/* email */}
          <div className="md:flex-1">
            <label className="text-lg">Email</label>
            <br />
            <input
              className="font-light text-white/[0.5] outline-none p-2 border border-white/[0.2] w-full rounded"
              type="text"
              placeholder="Your email is safe here"
              required
            ></input>
          </div>
        </div>
        {/* content mesage */}
        <div className="py-4">
          <label className="text-lg text-white">Content</label>
          <br />
          <textarea
            className="font-light text-white/[0.5] outline-none p-2 w-full h-40 border border-white/[0.2] rounded"
            placeholder="Place your message here..."
          ></textarea>
        </div>
        {/* button */}
        <div className="holographic-card text-lg flex items-center justify-center gap-2 p-3 border rounded-4xl border-[#91ff00] text-white">
          <p className="flex items-center gap-2">Send message</p>
        </div>
      </form>
      {/* horizontal line */}
      <hr className="text-white/[0.2] my-5" />
      {/* copy email */}
      <div className="flex text-lg gap-2 items-center justify-center text-white border border-white/[0.2] p-2 lg:w-80 rounded-2xl">
        <p>fritzharlydegamo@gmail.com</p>
        <button
          className="p-1 border border-white/[0.5] rounded"
          onClick={copy}
        >
          <FaRegCopy />
        </button>
      </div>
      {/* email copy notifications */}
      <div className="w-auto flex justify-center">
        <span
          className={`text-center border border-white/[0.5] p-1 w-50 text-white/[0.5] rounded-2xl mt-10 transition-all duration-300 ease-out ${
            copied ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Copied
        </span>{" "}
      </div>
    </div>
  );
}
export default Contact;
