import "./topbar.scss";
import { Person, Email } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Patrick.
          </a>
          <div className="itemContainor">
            <div className="icon">
              <Person />
            </div>
            <span>+61 450 990 214</span>
          </div>
          <div className="itemContainor">
            <div className="icon">
              <Email />
            </div>
            <span>patrickwongpub@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="hamburgerLine1"></span>
            <span className="hamburgerLine2"></span>
            <span className="hamburgerLine3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
