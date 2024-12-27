import Navbar from "./components/Navbar"
import './App.css'
import AboutMe from "./components/AboutMe"
import Experience from "./components/experience/Experience"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import ContactMe from "./components/contact_me/ContactMe"

const App = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App