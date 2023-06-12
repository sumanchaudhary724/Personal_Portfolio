import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hero } from "./Components/Hero";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { ContactMe } from "./Components/ContactMe";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
