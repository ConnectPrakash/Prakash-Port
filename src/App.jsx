import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import WorkExperience from "./pages/WorkExperience";
import ContactMe from "./pages/ContactMe";
function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="portfolio-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<WorkExperience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
