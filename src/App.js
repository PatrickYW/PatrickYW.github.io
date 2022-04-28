import "./App.scss";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const [viewportSize, setViewportSize] = useState({
  //   width: 0,
  //   height: 0,
  // });



  return (
    <div className="app">
      <div className="header">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
