import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Projects";
import PersonalProject from "./components/PersonalProjects/PersonalProjects";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Project />
        <PersonalProject />
      </main>
    </>
  );
}

export default App;
