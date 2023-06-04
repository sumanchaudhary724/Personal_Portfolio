import "bootstrap/dist/css/bootstrap.min.css";
// import { Navigation } from './Components/Navigation';
import { Hero } from "./Components/Hero";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { ContactMe } from "./Components/ContactMe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
