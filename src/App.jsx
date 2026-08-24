import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Projects";
import PersonalProject from "./components/PersonalProjects/PersonalProjects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Project />
        <PersonalProject />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
