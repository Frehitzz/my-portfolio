import Projectdiv from "../components/Projectdiv.jsx";
function Projects() {
  return (
    <div className="px-4 md:px-10 md:flex md:flex-col md:justify-center">
      <h1 className="text-3xl text-[#91ff00] text-center py-7 md:py-10 md:text-4xl">
        Project Collection
      </h1>
      <Projectdiv />
    </div>
  );
}
export default Projects;
