import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro" onClick={() => setMenuOpen(!menuOpen)}>
            Home
          </a>
        </li>
        <li>
          <a href="#projectsInfo" onClick={() => setMenuOpen(!menuOpen)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
