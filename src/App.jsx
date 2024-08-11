import './App.css';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';  // Correct path to the Footer component

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Footer />
      {/* <Contact /> */}
    </>
  );
}

export default App;
