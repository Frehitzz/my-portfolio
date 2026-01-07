import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import FloatNavbar from "./components/FloatNavbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Add Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatNavbar />
    </>
  );
}

export default App;
