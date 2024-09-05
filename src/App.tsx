import "./i18n/config";
import GithubLink from "./components/sections/GithubLink";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import LinkedInLink from "./components/sections/LinkedInLink";

function App() {
  return (
    <main>
      <GithubLink />
      <LinkedInLink />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
